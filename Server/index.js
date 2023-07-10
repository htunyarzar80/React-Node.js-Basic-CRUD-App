import express from 'express'
import cors from 'cors'
import bodyPraser from 'body-parser'
import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()
// import userRoutes from './routes/user.route'
import userRoutes from  "./routes/user.route.js";
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"1234",
    database:"basicnodedb"
})

// db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to the database: ', err);
//     } else {
//       console.log('Connected to the database');
//     }
//   });

app.use(bodyPraser.json());
app.use(cors());

app.use("/",userRoutes)

// app.get("/users", async(req,res)=>{
//     db.query("SELECT * FROM basicnodedb.student", (err,result)=>{
//         if(err) {
//         console.log(err)
//         } 
//     res.send(result)
//     });   
// });

app.all("*",(req,res)=>res.send("That Route doesn't exist"))

app.listen(process.env.PORT,()=>
console.log(`Server is Listening on port http://localhost:${process.env.PORT}!`)
)