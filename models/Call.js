const mongoose = require("mongoose");

const CallSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  req_by: {
    type: String
  },
  member_name: {
    type: String
  },
  aaa_membership: {
    type: String
  },
  member_phone: {
    type: String
  },
  location: {
    type: String
  },
  dest: {
    type: String
  },
  aaa_call_num: {
    type: String
  },
  enroute: {
    type: String
  },
  on_location: {
    type: String
  },
  in_tow: {
    type: String
  },
  clear: {
    type: String
  },
  mtv: {
    type: String
  },
  tow_miles: {
    type: String
  },
  t_code: {
    type: String
  },
  membership_level: {
    type: String
  },
  amount_collected: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("call", CallSchema);
