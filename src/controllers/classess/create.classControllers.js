const {Class} = require("../../models");
const {body} = require("express-validator")

const service = async function(req, res, next) {
    try {
        const payload = req.body;
    const requestDB = await Class.create(payload);
    return res.json({msg:"Kelas Berhasil di Tambahkan", data: requestDB});
    } catch (error) {
        return res.status(500).json({msg: error.toString()})
    }
    
};
const validation = [
    body("name").notEmpty().withMessage("Nama Kelas Wajib diisi").custom(async (value) => {
        const dataClass = await Class.findOne({where: {name:value}});
        if (dataClass) {
            return Promise.reject(`Nama Kelas ${value} sudah digunakan`);
        }
        return true;
    })
];
// const validation = [body("name").notEmpty().withMessage("nama kelas tidak boleh kosong").custom(value=>{return Class.findOne({where:{name:value}})}).then(data => {if(data) return Promise.reject("Nama kelas sudah digunakan")})]

module.exports = {service, validation};