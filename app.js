const express = require('express');
const exphbs  = require('express-handlebars');

// this code initializes the application
const app = express();

// to add static images to page
app.use(express.static('public'))



// express - handlebars middleware
// telling the system, that wwe want to use the handlebars template engine
// add ==                       {defaultLayout: 'main'}
app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');




// ==============================================================  page routes

// index route // home url
// always put req, res == contain alot of property and methods that have to do with server response
app.get('/', (req, res) => {
    const title = 'Welcome1'
    res.render('index', {
        title: title
    });
});

// about route
app.get('/about', (req, res) => {
    res.render('about');                    // always when going to new page use (( res.render ('whateverpage') ))
});



// ==============================================================  espanol routes
app.get('/espanol', (req, res) => {
    const title = 'Bienvenidos'
    res.render('espanol', {
        title: title
    });
});

app.get('/sobre', (req, res) => {
    const title = 'Bienvenidos'
    res.render('sobre', {
        title: title
    });
});


// ==============================================================  end page routes


const port = 5000;

//listen on a sertain port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});