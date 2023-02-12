import  express  from "express";
import  bodyParser  from "body-parser";
import mongoose, {  Mongoose} from "mongoose";
import  cors from "cors";
import postRouters from './routes/posts.js'

const app =express()

app.use('/posts',postRouters)
app.use(bodyParser.json({limit:"30mb",extended:true}))

app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

// https://www.mongodb.com/cloud/altas


const CONNECTION_URL='mongodb+srv://gio:e3b3b8454@cluster0.8amxfsj.mongodb.net/?retryWrites=true&w=majority'

const PORT =process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`)))
    .catch((error)=>console.log(error.message) )

  //  mongoose.set('useFindAndModify',false)
