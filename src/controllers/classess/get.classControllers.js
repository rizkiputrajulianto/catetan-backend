const {Class,schedule, Sequelize:{Op}} = require("../../models");

const service = async function(req, res, next) {
    try {
        const where = {};
        const page = Number(req.query.page) || 0;
        const limit = Number(req.query.limit) || 0;
        if(req.params.id){
            where.id = {
                [Op.eq]: req.params.id
            }
        }
        if (req.query.search) {
            where.name = {
                [Op.substring]: req.query.search,
            }
        }
        const requestDB = await Class.findAll({attributes:{exclude:["img","createdAt"]},where,include:{model: schedule, as:"Schedules"},order:[["id","DESC"]],offset: (page -1 ) *limit || null,limit: limit || null});

        if(!req.params.id){
            return res.json(requestDB);
        } else {
            if(requestDB.length<1){
                return res.status(404).json({msg:"Data tidak ditemukan hehe"});
            } else {
                return res.json(requestDB[0]);
            }
        }
        
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service}