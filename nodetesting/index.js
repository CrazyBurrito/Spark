var express = require("express");

console.log("Starting...");
var app = express();

app.get("/", function(request, response){
    console.log("Sending index.html");
    response.sendFile(__dirname + "/index.html");
})

app.get("/hello/:name", function(request, response){
    console.log("Sending greeting");
    //~ response.sendFile(__dirname + "/index.html");
    response.send("Hello, " + request.params.name + "!");
})
app.listen(process.env.PORT || 3000);

console.log("Finished.");
