const express = require("express");
const app = express();
const port = 8080; // Default hosting provider port.

app.use(express.static("public"));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/index.html");
});

app.get("/commands", function(request, response) {
    response.sendFile(__dirname + "/views/commands.html");
});

app.get("/hidden", function(request, response) {
    response.sendFile(__dirname + "/views/easter.html");
});

app.get("*", function(request, response) {
    response.status(404).send("Not Found");
});

const listener = app.listen(port, function() {
    console.log(`Express has started on port ${port} and is now live.`);
});
