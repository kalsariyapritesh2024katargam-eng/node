const user = require('../model/user')
let USER = require('../model/user')

exports.pageView = async (req, res) => {

    const data = await USER.find()

    res.render('home.ejs',{data,editrecord : null})
}

exports.createData = async (req, res) => {
    const data = req.query

    if(data.id !=''){

        await USER.findByIdAndUpdate(data.id,data)
    }
    else{
        await USER.create(data)
    }
    
    
    res.redirect('/')

}
exports.deletedata = async (req,res) =>{
    const deleteid = req.params.id

    await USER.findByIdAndDelete(deleteid)

    res.redirect('/')
}
exports.updatedata = async(req,res) => {
    const editid = req.params.id
    const editrecord  = await USER.findById(editid)
    const data = await USER.find() 

    res.render('home.ejs',{editrecord ,data})
}