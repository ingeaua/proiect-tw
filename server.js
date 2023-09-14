const express = require('express')
const app = express()
const session = require('express-session');

app.set('view engine', 'ejs')

app.use('/public', express.static('public'));
app.use(express.urlencoded({extended:false}))


app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

textSchimba = 'Introduceti datele de logare!'

app.post('/login', (request, response) => {
    const {username, password} = request.body;
    if(username === 'admin' && password === 'admin'){
        request.session.loggedin = true;
        response.redirect('/acasa');
    }
    else{
        textSchimba = 'Datele introduse sunt gresite, reincercati!'
        response.redirect('/login');
    }
})

todaysDate = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})

app.get('/', (request, response) => {
    response.redirect('/login');
})

app.get('/index', (request, response) => {
    response.redirect('/login');
})

app.get('/login', (request, response) => {
    response.render('index.ejs', {text: textSchimba})
})

app.get('/acasa', (request, response) => {
    if(!request.session.loggedin){
        response.redirect('/login');
    }
    response.render('acasa.ejs', { dataAzi: todaysDate})
})

app.get('/despre', (request, response) => {
    if(!request.session.loggedin){
        response.redirect('/login');
    }
    response.render('despre.ejs', { dataAzi: todaysDate})
})

app.get('/json', (request, response) => {
    response.sendFile(__dirname + '/cafele.json');
  });
  
jsonData = ""

app.get('/meniu1', (request, response) => {
    if(!request.session.loggedin){
        response.redirect('/login');
    }
    
    fetch('http://localhost:3000/json') 
        .then(response => response.json())
        .then(data => {
          jsonData = JSON.parse(JSON.stringify(data, null, 2));
        })
        .catch(error => console.error('Error:', error));

    response.render('meniu1.ejs', {cafele: jsonData}) 
    
})

app.get('/meniu2', (request, response) => {
    if(!request.session.loggedin){
        response.redirect('/login');
    }
    
    response.render('meniu2.ejs') 
    
})

app.get('/oferte', (request, response) => {
    if(!request.session.loggedin){
        response.redirect('/login');
    }
    response.render('oferte.ejs', { dataAzi: todaysDate})
})

app.get('/oferte2', (request, response) => {
    if(!request.session.loggedin){
        response.redirect('/login');
    }
    response.render('oferte2.ejs', { dataAzi: todaysDate})
})

app.get('/:orice', (request, response) => {
    if(!request.session.loggedin){
        response.redirect('/login');
    }
    response.render('404.ejs', {data: request.params.orice})

})


app.listen(3000)