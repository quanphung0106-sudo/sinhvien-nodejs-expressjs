// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Course = new Schema({
    name: { type: String, minlength: 1, required: true },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoID: { type: String },
    level: { type: String, minlength: 5 }
}, 
{
    timestamps: true,
}
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt : true });

module.exports = mongoose.model('Course', Course);
