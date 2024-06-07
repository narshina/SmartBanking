import mongoose from 'mongoose';
import user from './User.js';

const transSchema = new mongoose.Schema({
  amount: {
    type: Number,
    default:0
   
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref:user,
  },
  trans:{
    type:Number
  },
  date:{
    type:Date,
    default:Date.now
  },
  types:{
    type:String
  }
});

const Transaction = mongoose.model('Transaction', transSchema);

export default Transaction;
