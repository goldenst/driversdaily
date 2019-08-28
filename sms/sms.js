const accountSid = "AC1a49a786804c12e0529cf9af982c430d";
const authToken = "f97f8b2e75eaec8fdfafb26a0d61e841";

const client = require("twilio")(accountSid, authToken);



client.messages.create(
  {
    to: "+19168266944",
    from: "+19168238682",
    body: `Thank you for allowing us at Golden State Towing to provide service today.  If you were Totally Satisfied with the service our driver provided we would appreciate you taking a moment to fill out the AAA survey which may come by email or in the mail.  Your driver and our company are measured on the question related to your Overall Satisfaction.  

    If you were less than Totally Satisfied please feel free to contact us at 916 646-1916
    `
  },
  function(err, message) {
    if (err) {
      console.log(err);
    } else {
      console.log(message.sid);
    }
  }
);
