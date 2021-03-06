const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middleware
app.use(express.static(path.join(__dirname, "..", "build")));
// routing
if(process.env.NODE_ENV === 'production') {
    app.get(function (req, res) {
        console.log(req);
         res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }

// start express server on port 8000
app.listen(8000, () => {
  console.log("server started on port 8000");
});