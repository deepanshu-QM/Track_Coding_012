const walletSchema = new mongoose.Schema({
  address: {
    type: String,
    unique: true,
    required: true
  },

  publicKey: {
    type: String,
    required: true
  },

  balance: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Wallet", walletSchema);
