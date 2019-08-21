const mongoose = require ('mongoose');

const CallSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  customer_name: {
    type: String
  },
  cust_phone: {
    type: String
  },
  location: {
    type: String
  },
  dest: {
    type: String
  },
  mtv : {
    type: Number
  },
  towMiles: {
    type: Number
  },
  aaa_callnum: {
    type: String
  },
  cash_tag: {
    type: String
  },
  
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('call', CallSchema)