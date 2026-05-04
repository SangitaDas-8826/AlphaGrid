import mongoose from "mongoose";

const connectDB =  async (req,res) => {
    try {
        mongoose.connect(process.env.MONGO_URI)
          .then(() => console.log('✅ MongoDB Connected Successfully'))
          .catch((err) => console.error('❌ MongoDB Connection Error:', err));
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;