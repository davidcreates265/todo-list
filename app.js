//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();  
 /** This function represents the express module & use the word'app' for best practice*/

app.set("view engine", "ejs");



app.get("/", function(request, response){

    let today = new Date();
    let currentDay = today.getDay();
    let day ="";

    switch(currentDay) {
        case 0:
            day = "Sunday"
            break;
        
        case 1:
            day = "Monday"
            break;
            
        case 2:
            day = "Tuesday"
            break;
                
        case 3:
            day = "Wednesday"
            break; 
                    
        case 4:
            day = "Thursday"
            break;
                    
        case 5:
            day = "Friday"
            break;
                        
        case 6:
        day = "Saturday"
        break;

        default:
        console.log("Error: Current day is " + currentDay);
      }

    response.render("todolist", {whatDay: day});
    });


app.listen(3000, function(){
    console.log("Server is listening or has started on specified port");
}); /** Use the app by using one of its method called listen. Listen on a specific port for any http request that gets sent to our server*/