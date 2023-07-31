const mongoose = require("mongoose")

const connectionString =
  "mongodb+srv://ac22:s2dnKfuaeZPKcMcVXj9K@clusternotes.5fbuixr.mongodb.net/appnotesdb?retryWrites=true&w=majority"

//conexion mongodb
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected")
  })
  .catch((err) => {
    console.log(err)
  })
