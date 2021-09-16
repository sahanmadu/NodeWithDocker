const express =require('express');

const app = express();

const PORT = process.env.port || 8070;


app.get('/',  (req, res)=> {res.send("hELL1 WORLD!")});

app.listen(PORT,()=>{
    console.log(`App is runnig on port: ${PORT} `);
})