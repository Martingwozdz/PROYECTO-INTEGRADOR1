const express = require("express");
const cors = require("cors");
const db = require("../server/db/index");
const morgan = require("morgan");
const app = express();
const routes = require("./routes")
const cookieParser = require("cookie-parser")


app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser())
app.use(cors({ credentials: true, origin: "http://localhost:3002" }));
app.use("/api",routes);



db.sync({ force: false }).then(() => {
    app.listen(3001, () => {
      console.log('server escuchando en el puerto 3001');;
    });
  });