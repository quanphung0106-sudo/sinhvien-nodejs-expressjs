const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://clupma5no3:quanphung0935@nodetuts.dlyye.mongodb.net/nodetuts?retryWrites=true&w=majority');
        console.log('Connect Successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
