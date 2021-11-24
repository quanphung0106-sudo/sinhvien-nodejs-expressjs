const Lop = require('../models/Lop');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] /me/storage/lops
    storageMyLops(req, res, next) {
        Promise.all([ Lop.find({}), Lop.countDocumentsDeleted()])
        .then(([lops, deletedCount]) => 
            res.render('me/storage-lops', {
                lops: multipleMongooseToObject(lops),
                deletedCount,
            })
        )
        .catch(next);
    };
    
    myTrashLops(req, res, next) {
        Lop.findDeleted({})
            .then(lops => res.render('me/trash-lops', {lops: multipleMongooseToObject(lops),}))
            .catch(next);
    };
    
}

module.exports = new MeController();
