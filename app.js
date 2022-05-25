require ('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Gaspar Bascur',
        titutlo: 'test pagina web'
    });
});

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Gaspar Bascur',
        titutlo: 'test pagina web'
    });
});

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Gaspar Bascur',
        titutlo: 'test pagina web'
    });
});



app.listen(port, () =>{
    console.log(`El ejemplo de la app esta usando el puerto en http://localhost:${port}`);
})