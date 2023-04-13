//jshint esversion:6
 

//Module 1

const getDate = function() {
let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

module.exports.getDate = getDate;


//Module 2
 

const getDay = function() {
    let today = new Date();
    
      let options = {
        weekday: "long",
      };
    
      let day = today.toLocaleDateString("en-US", options);
    
      return day;
    }
    
    module.exports.getDay = getDay;
    