let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to nodejs demo"
    });
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

