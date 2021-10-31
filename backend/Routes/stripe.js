const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      amount: req.body.amount,
      currency: "usd",
      source: req.body.token.id,
    },
    (err, charge) => {
      if (err) {
        res.json({
          status: false,
          message: err,
        });
      } else {
        res.json({
          status: true,
          message: "Payment Successful",
          charge,
        });
      }
    }
  );
});
module.exports = router;
