const express = require("express");

const bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

//server as static content for the app from the public folder
app.use(express.static("public"));

//parse application www-form-urlencode and json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//setting Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));
//can we name "views" with any??
app.set("view engine","handlebars");

app.use(require('./controllers/burgers_controllers'));

app.listen(PORT, function(){
    console.log("Server listening to PORT 3000");
})
