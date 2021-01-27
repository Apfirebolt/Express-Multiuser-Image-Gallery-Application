const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const { connectDB } = require('./utils/db.js');

const app = express();

// Connect to mongoDB Database
connectDB();

// Load routes
const auth = require('./routes/authRoutes.js');
const users = require('./routes/userRoutes.js');
const gallery = require('./routes/galleryRoutes.js');

// Passport Config
require('./utils/passport')(passport);

// Handlebars Middleware
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Method override middleware
// app.use(methodOverride('_method'));

// Express session middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Global variables
app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// Use routes
// app.use('/gallery', gallery);
// app.use('/users', users);
// app.use('/auth', auth);

const port = 5000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});