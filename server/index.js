const express = require("express");
const data = require("./api/data")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

app.get('/', async (req, res) => {
    // res.status(200).send('Hello World!');

    await data.getData()
    .then(response => {
       console.log(response);
    })
    .catch(error => {
        res.status(500).send(error);
      })
    console.log("server running")
})

//testing 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});