const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Call = require("../models/Call");

// @route   GET  api/calls
// @Desc    Get all users calls
// @Access  Private
// Status
router.get("/", auth, async (req, res) => {
  try {
    const calls = await Call.find({ user: req.user.id }).sort({ date: -1 });
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
    check("customer_name", "customer name isrequired")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { customer_name, cust_phone, location, dest, aaa_callnum } = req.body;

    try {
      const newCall = new Call({
        user: req.user.id,
        customer_name,
        cust_phone,
        location,
        dest,
        aaa_callnum
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
  const { customer_name, cust_phone, location, dest, aaa_callnum } = req.body;

  // call object
  const callFields = {};
  if (customer_name) callFields.customer_name = customer_name;
  if (cust_phone) callFields.cust_phone = cust_phone;
  if (location) callFields.location = location;
  if (dest) callFields.dest = dest;
  if (aaa_callnum) callFields.aaa_callnum = aaa_callnum;

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
