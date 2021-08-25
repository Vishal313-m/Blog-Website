import mongoose from 'mongoose';


const Connection = async () => {
    try 
    {
    const URL = 'mongodb+srv://vishal:12345@blogweb.rbt81.mongodb.net/BLOG?retryWrites=true&w=majority';
 await mongoose.connect(URL,{useNewUrlParser:true , useUnifiedTopology:true,   useFindAndModify:false});
    console.log('Database connected successfully');
    }
    catch(error)
    {
        console.log('Error while connecting to Mongodb',error)
    }

}
export default Connection;