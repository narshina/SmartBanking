import mongoose from 'mongoose';

const transSchema = new mongoose.Schema({
  amount: {
    type: Number,
    default: 0,
  },
  userId: {
    type: String,
    required: true,
  },
  type:{
    type:String
  }
});

const Transaction = mongoose.model('Transaction', transSchema);

export default Transaction;
