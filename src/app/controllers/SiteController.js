const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /news
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     // docs.forEach
        //     if(!err) {
        //         res.json(courses);
        //         return;
        //     } else {
        //         next(err);
        //     }
        //   });

        // Course do Mongoose trả ra là một Function Contructor => Có những proto => Vi phạm bảo mật của thư viện handlebars
        Course.find({})
            // .then(courses => res.render('home', { courses }))
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
