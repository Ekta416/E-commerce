const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const cors = require('cors');


dotenv.config()

const app=express()
app.use(cors());

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
).then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("MongoDB connection error:', err",err))


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
const PORT=process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
