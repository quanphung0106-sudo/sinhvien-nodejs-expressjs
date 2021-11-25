// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const SinhVien = new Schema({
    hoTen: { type: String, require: true },
    nu: { type: String, require: true },
    ngaySinh: { type: String, require: true},
    maLop: { type: String, require: true},
    hocBong: { type: Number, require: true},
    Tinh: { type: String, require: true},
    slug: { type: String, slug: 'tenLop', unique: true },

}, 
{
    timestamps: true,
}
);
mongoose.plugin(slug);
SinhVien.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt : true });

module.exports = mongoose.model('SinhVien', SinhVien);
