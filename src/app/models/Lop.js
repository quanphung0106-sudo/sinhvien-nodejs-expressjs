// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Lop = new Schema({
    tenLop: { type: String, require: true },
    maKhoa: { type: String, require: true },
    slug: { type: String, slug: 'tenLop', unique: true },

}, 
{
    timestamps: true,
}
);
mongoose.plugin(slug);
Lop.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt : true });

module.exports = mongoose.model('Lop', Lop);
