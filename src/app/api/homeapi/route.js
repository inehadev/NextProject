const express= require('express')
const cors = require('')
const app = express();

app.use(cors());
const PORT = 4000;

app.listen (PORT , ()=>{
    console.log(`server is running at ${PORT }`);
})

