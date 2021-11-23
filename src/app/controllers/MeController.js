const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /me/storage/courses
    storageMyCourses(req, res, next) {

        Promise.all([ Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => 
                res.render('me/storage-courses', {
                    courses: multipleMongooseToObject(courses),
                    deletedCount,
                })
            )
            .catch(next);
    };
    
    myTrashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {courses: multipleMongooseToObject(courses),}))
            .catch(next);
    };
    
}

module.exports = new CourseController();
