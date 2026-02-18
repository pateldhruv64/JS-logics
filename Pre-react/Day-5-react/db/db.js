import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const dbcon = async () => {
  try {
    await mongoose.connect(process.env.mongourl);
    console.log('mongo is connect');
  } catch (error) {
    console.log('mongo is not connect', error.message);
    process.exit(1);
  }
};
export default dbcon;
dbcon();
