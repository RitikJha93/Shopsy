const express = require('express');
const app = express();
const cors  = require('cors');
const dotenv = require('dotenv');
const db = require('./db/db')
const colors = require('colors')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
dotenv.config()
app.use(express.json())
db()
const options = {
    origin : ['http://localhost:3000','https://shopsy-93.vercel.app'],
    useSuccessStatus:200
}
app.use(cors(options))

app.get('/',(req,res)=>{
    res.send("server running")
})
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.listen(5000,()=>{
    console.log('server started successfully'.yellow.bold);
})