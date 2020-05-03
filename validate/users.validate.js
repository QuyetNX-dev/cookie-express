module.exports.validateUser = (req, res, next) => {
    let error = []
    if(!req.body.name){
        error.push('bạn chưa nhập tên khách hàng')
    }
    if(error.length){
        res.render("users/post",{
            error,
            value: req.body
        });
        return;
    }
    if(req.body.name.length > 30){
        res.render("users/post",{
            tooLength: 'Tền người dùng không có thật, bạn vui lòng nhập lại'
        });
        return;
    }
    next()
}