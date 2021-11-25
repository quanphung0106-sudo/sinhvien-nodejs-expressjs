const Lop = require('../models/SinhVien');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class LopsController {

    //[GET] /courses/create
    create(req, res, next) {
        res.render('lops/create');
    };

    //[POST] /lops/store
    store(req, res, next) {
        const lops = new Lop(req.body);
        lops
            .save()
            .then(() => res.redirect('/me/storage/lops'))  
            .catch(next);
    };

    //[GET] /lops/:id/edit
    edit(req, res, next) {
        Lop.findById(req.params.id)
            .then(lops => res.render('lops/edit', { lops: mongooseToObject(lops) }))
            .catch(next);
    };

    //[PUT] /lops/:id
    update(req, res, next) {
        Lop.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/storage/lops'))
            .catch(next);
    };

    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Lop.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };

    //[DELETE] /courses/:id
    destroy(req, res, next) {
        Lop.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };

    //[DELETE] /lops/:id/force
    forceDestroy(req, res, next) {
        Lop.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };

    
    //[GET] /lops/find-id
    findById(req, res, next) {
        // Lop.findById(req.params.id)
        // .then((lop) => { 
        //     res.render('/lops/find', { lop: mongooseToObject(lop) });
        // })
        Lop.find({})
            .then((lops) => {
                res.render('lops/find', { lops: multipleMongooseToObject(lops)})
            })
            .catch(next);
     }
}

module.exports = new LopsController();
