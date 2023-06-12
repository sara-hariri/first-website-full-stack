const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(express.static(__dirname, { // host the whole directory
    extensions: ["html", "htm", "css", "gif", "png", "mp4"],
}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");

});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});
