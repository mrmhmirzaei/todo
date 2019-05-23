let USER = require('../database/user'),
    CRYPTO = require('../services/crypto'),
    AUTH = require('../services/auth');

async function register(req, res) {
    let username = req.body.username,
        password = req.body.password,
        fullname = req.body.fullname;

    if (username == null && password == null && fullname == null) {
        return res.json({
            status: false,
            message: 'مقادیر خالی است.'
        })
    } else {
        password = await CRYPTO.hash(password);
        new USER({ username: username, password: password, fullname: fullname }).save();
        res.json({
            status: true,
            message: 'ثبت نام با موفقیت انجام شد.'
        })
    }
}

async function login(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let data = await USER.findOne({ username }).exec();
    if (data == null) {
        return res.json({
            status: false,
            message: 'کاربری با این نام یافت نشد.'
        })
    }
    if (password != await CRYPTO.crack(data['password'])) {
        return res.json({
            status: false,
            message: 'نام کاربری یا پسورد اشتباه است'
        })
    }
    else {
        let auth = await AUTH.generate(data['_id'], 'user');
        return res.json({
            status: true,
            auth: auth,
            data: { fullname: data['fullname'] }
        })
    }
}

module.exports = { register, login }