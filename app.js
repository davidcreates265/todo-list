//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/components/getdate");

const app = express();
/** This function represents the express module & use the word'app' for best practice*/

let items = [];
let workItems = [];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (request, response) {
 
  let day = date.getDay();
  response.render("todoList", { listTitle: day, newListItems: items });
});

app.post("/", function(request, response){
    
  console.log(request.body);
  
  let item = request.body.newItem;
  if (request.body.todoListButton === "Work") {
      workItems.push(item);
      response.redirect("/work");

  } else {
      items.push(item);
      response.redirect("/");
  }

});

app.get("/work", function(request,response){
response.render("todolist", {listTitle: "Work List", newListItems: workItems});
});



app.listen(3000, function () {
  console.log("Server is listening or has started on specified port");
}); /** Use the app by using one of its method called listen. Listen on a specific port for any http request that gets sent to our server*/
