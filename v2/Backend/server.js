const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors())

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME,
    port: process.env.DB_PORT
})

app.get('/', (req, res) => {
    return res.json("Working!");
})

app.get('/productinfo', (req, res)=>{
    const sql = "Select * FROM products";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})


app.listen(3000, ()=>{
    console.log("listening")
})

//dotenv = config will read your env files, parse the contents, assign the process.env and return an object with an parsed key containing the loaded content or error key if failed.

//cors = this allows a browser to request resources from a server on a different domain