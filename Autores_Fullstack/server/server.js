const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");

const AuthorRouter= require("./routes/author.routes"); // Cambiar a product.routes
app.use("/api/author", AuthorRouter); 

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

