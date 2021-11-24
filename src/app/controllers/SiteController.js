const Lop = require('../models/Lop');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /lops
    index(req, res, next) {
        // Lop do Mongoose trả ra là một Function Contructor => Có những proto => Vi phạm bảo mật của thư viện handlebars
        Lop.find({})
            .then((lops) => {
                res.render('home', {
                    lops: multipleMongooseToObject(lops),
                });
            })
            .catch(next);

        // res.render('home');
    };
}

module.exports = new SiteController();
