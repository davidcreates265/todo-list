//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();  
 /** This function represents the express module & use the word'app' for best practice*/

let items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(request, response){

    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    response.render("todolist", {whatDay: day, newListItems: items});
    });

    app.post("/", function(request, response){
       let item = request.body.newItem;
       
       items.push(item);

       response.redirect("/");

    })


app.listen(3000, function(){
    console.log("Server is listening or has started on specified port");
}); /** Use the app by using one of its method called listen. Listen on a specific port for any http request that gets sent to our server*/