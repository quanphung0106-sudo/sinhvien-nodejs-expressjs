const path = require('path');

//Yêu cầu thư viện express => đi tới file node_modules để tìm => nạp vào biến express.
const express = require('express');

//express là 1 func và được viết sẵn trong express => trả lại 1 instance có tên là app
//và nó chính là cái đối tượng để chúng ta có thể xây dựng lên website sau này của chúng ta
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));
//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b, 
        }, 
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
