const USER = require('../model/test');


exports.pageview = async (req, res) => {
    const data = await USER.find();
    res.render('test', { data, editrecord: null });   
};


exports.createData = async (req, res) => {
    const form = req.query;

    if (form.id && form.id !== "") {
      
        await USER.findByIdAndUpdate(form.id, form);
    } else {
      
        await USER.create(form);
    }

    res.redirect('/');
};


exports.deleteData = async (req, res) => {
    await USER.findByIdAndDelete(req.params.id);
    res.redirect('/');
};


exports.editData = async (req, res) => {
    const editrecord = await USER.findById(req.params.id);
    const data = await USER.find();
    res.render('test', { data, editrecord });
};
