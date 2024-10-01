let express = require("express");
require("dotenv").config();
let app = express();

app.listen(process.env.port, () => {
  console.log(`app is running on ${process.env.port}!`);
});
