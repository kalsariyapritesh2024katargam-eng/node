let USER = require('../model/model')

exports.loginPage = async (req, res) => {
    const data = await USER.find()
    res.render('login.ejs',{data})
}

exports.signUp = async (req, res) => {
    const data = await USER.find()
    res.render('signup.ejs',{data})
}

exports.signupUser = async (req, res) => {
    const data = req.query

    await USER.create(data)

    res.redirect('/')

}

exports.loginUser = async (req, res) => {
    const { username, password } = req.query;

    // find user by email
    const user = await USER.findOne({ username });

    if (!user) {
        return res.send("User not found");
    }

    // check password
    if (user.password !== password) {
        return res.send("Incorrect password");
    }

    // login success
    res.render("dashboard.ejs", { user });
}

exports.logout = async (req, res) => {
    res.redirect('/')
}