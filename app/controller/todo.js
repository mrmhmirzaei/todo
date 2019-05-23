let TODO = require('../database/todo');

function add(req, res) {
    let expln = req.body.expln;
    if (expln == null) {
        return res.json({
            status: false,
            message: 'شما توضیحات را وارد نکرده اید.'
        })
    } else {
        new TODO({ user: req._id, expln: expln }).save();
        res.json({
            status: true,
            message: 'اطلاعات ذخیره شد.'
        })
    }
}

async function remove(req, res) {
    let id = req.body.id;
    if (id == null) {
        return res.json({
            status: false,
            message: 'ای دی را ارسال نکرده اید.'
        })
    } else {
        await TODO.deleteOne({ '_id': id }).exec();
        return res.json({
            status: true,
            message: 'اطلاعات پاک شدند.'
        })
    }
}

async function update(req, res) {
    let id = req.body.id,
        expln = req.body.expln;
    if (id == null) {
        return res.json({
            status: false,
            message: 'ای دی را ارسال نکرده اید.'
        })
    } else if (expln == null) {
        return res.json({
            status: false,
            message: 'شما توضیحات را وارد نکرده اید.'
        })
    } else {
        await TODO.updateOne({ '_id': id }, { expln: expln }).exec();
        return res.json({
            status: true,
            message: 'اطلاعات ویرایش شدند.'
        })
    }
}

async function get(req, res) {
    let data = await TODO.find({user: req._id}).exec();
    return res.json({
        status: true,
        data: data
    })
}



async function check(req, res) {
    let id = req.body.id,
        checked = req.body.checked;
    if (id == null) {
        return res.json({
            status: false,
            message: 'ای دی را ارسال نکرده اید.'
        })
    } else if (typeof check != 'boolean') {
        return res.json({
            status: false,
            message: 'نوع داده ورودی اشبه است.'
        })
    } else {
        await TODO.updateOne({ '_id': id }, { checked: checked }).exec();
        return res.json({
            status: true,
            message: 'کار موردنظر به انجام رسیده است.'
        })
    }
}




module.exports = { newTodo: add, removeTodo: remove, updateTodo: update, getAllTodo: get, getChangeCheck: check };