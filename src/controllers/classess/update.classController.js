const { body } = require("express-validator");
const {Class} = require("../../models");

const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const where = {id: req.params.id}
        const requestDB = await Class.update(payload, {where});
        if(requestDB[0]){
            return res.json({msg:"data berhasil di update", data:payload});
        } else {
            return res.status(404).json({msg:"Data gagal ditambahkan"});
        }
    } catch (error) {
        return res.status(500).json({msg:error.toString()})
    }
}
const validation = [body().custom(async (value, {req}) => {
    const checkName = await Class.findOne({where:{name:value.name}});
    if (checkName && req.params.id != checkName.id) {
        return Promise.reject(`Nama ${value.name} Sudah Digunakan`)
    };
    return true;
})]
module.exports = {service, validation}