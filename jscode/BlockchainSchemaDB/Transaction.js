const transactionSchema = new mongoose.Schema({
  sender: {
    type: String, // wallet address
    required: true
  },

  receiver: {
    type: String, // wallet address
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  fee: {
    type: Number,
    default: 0
  },

  signature: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "failed"],
    default: "pending"
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transaction", transactionSchema);
