let USER = require('../model/model')

exports.loginPage = async (req, res) => {
    res.render("login", {
        error: "",
        data: {}
    });
};

exports.signUp = async (req, res) => {
    res.render("signup", {
        data: {},
        error: ""
    });
};

exports.signupUser = async (req, res) => {
    const data = req.body;

    const username = data.username;
    const email = data.email;
    const password = data.password;

    if (!username || !email || !password) {
        return res.render("signup", {
            error: "All fields are required",
            data: data
        });
    }

    const user = await USER.findOne({ username });
    const emailExist = await USER.findOne({ email });

    if (user && emailExist) {
        return res.render("signup", {
            error: "User already exists",
            data: data
        });
    }

    if (user) {
        return res.render("signup", {
            error: "Username already taken",
            data: data
        });
    }

    if (emailExist) {
        return res.render("signup", {
            error: "Email already registered",
            data: data
        });
    }

    await USER.create(data);
    res.redirect("/");
};

exports.loginUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await USER.findOne({ username });

    if (!user) {
       return res.render("login", {
    error: "User not found",
    data: { username }
});

    }

    if (user.password !== password) {
        return res.render("login", {
            error: "Incorrect password",
            data: { username }
        });
    }

    // Redirect to dashboard with username
    res.redirect(`/dashboard?username=${username}`);
};

exports.dashboard = async (req, res) => {
    const username = req.query.username;

    // Fetch full user from database
    const user = await USER.findOne({ username });

    if (!user) {
        return res.redirect("/");
    }

    res.render("dashboard", { user });
};

exports.logout = async (req, res) => {
    res.redirect('/');
};
