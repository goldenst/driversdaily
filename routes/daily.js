const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Call = require("../models/Call");

// @route   GET  api/daily
// @Desc    Get all  calls
// @Access  Private
// Status
router.get("/", auth, async (req, res) => {
  try {
    console.log('in cal for calls')
    const calls = await Call.find();
    res.json(calls);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error C19");
  }
});

// @route   POST  api/calls
// @Desc    Add new call
// @Access  Private
// Status
router.post(
  "/",
  auth,
  [
    check("member_name", "customer name isrequired")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({ errors: errors.array() });
      
    }

    const {      
      req_by,
      member_name,
      aaa_membership,
      member_phone,
      location,
      dest,
      aaa_call_num,
      enroute,
      on_location,
      in_tow,
      clear,
      mtv,
      tow_miles,
      t_code,
      membership_level,
      amount_collected 
    } = req.body;

    try {
      const newCall = new Call({
        user: req.user.id,
        req_by,
        member_name,
        aaa_membership,
        member_phone,
        location,
        dest,
        aaa_call_num,
        enroute,
        on_location,
        in_tow,
        clear,
        mtv,
        tow_miles,
        t_code,
        membership_level,
        amount_collected
      });

      const call = await newCall.save();

      res.json(call);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error C66");
    }
  }
);

// @route   Put  api/calls/:id
// @Desc    Update call
// @Access  Private
// Status
router.put("/:id",  auth, async (req, res) => {
  const {      
    req_by,
    member_name,
    aaa_membership,
    member_phone,
    location,
    dest,
    aaa_call_num,
    enroute,
    on_location,
    in_tow,
    clear,
    mtv,
    tow_miles,
    t_code,
    membership_level,
    amount_collected 
  } = req.body;

  // call object
  const callFields = {}; 
  if (req_by) callFields.req_by = req_by;
  if (member_name) callFields.member_name = member_name;
  if (member_phone) callFields.member_phone = member_phone;
  if (aaa_membership) callFields.aaa_membership = aaa_membership;
  if (aaa_call_num) callFields.aaa_call_num = aaa_call_num;
  if (location) callFields.location = location;
  if (dest) callFields.dest = dest;
  if (enroute) callFields.enroute = enroute;
  if (on_location) callFields.on_location = on_location;
  if (in_tow) callFields.in_tow = in_tow;
  if (clear) callFields.clear = clear;
  if (mtv) callFields.mtv = mtv;
  if (tow_miles) callFields.tow_miles = tow_miles;
  if (t_code) callFields.t_code = t_code;
  if (membership_level) callFields.membership_level = membership_level;
  if (amount_collected) callFields.amount_collected = amount_collected;

  try {
    let call = await Call.findById(req.params.id);

    if (!call) return res.json(404).json({ msg: "Call not found" });

    // make sure user owns call
    if (call.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    call = await Call.findByIdAndUpdate(
      req.params.id,
      { $set: callFields },
      { new: true }
    );

    res.json(call);
  } catch (err) {
    console.error(err);
      res.status(500).send("Server Error C97");
  }
});

// @route   delete  api/calls/:id
// @Desc    Add new call
// @Access  Private
// Status
router.delete("/:id", auth, async(req, res) => {
  try {
    let call = await Call.findById(req.params.id);

    if (!call) return res.json(404).json({ msg: "Call not found" });

    // make sure user owns call
    if (call.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    await Call.findByIdAndRemove(req.params.id)


    res.json({msg: "Call Removed"});
  } catch (err) {
    console.error(err);
      res.status(500).send("Server Error C97");
  }
});

module.exports = router;
