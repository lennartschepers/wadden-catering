const { createMollieClient } = require("@mollie/api-client");

const mollieClient = createMollieClient({ apiKey: process.env.mollie_token });

export default async (req, res) => {
  try {
    const payment = await mollieClient.payments.create({
      amount: {
        currency: "EUR",
        value: req.body.amount, // You must send the correct number of decimals, thus we enforce the use of strings
      },
      metadata: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        delivery: req.body.deliver,
        text: req.body.text
      },
      description: req.body.product_name,
      redirectUrl: "https://rvdw-git-products.frsc.now.sh/betaling?product=" + req.body.product_name,
    });

    res.send('"' + payment.getCheckoutUrl() + '"');
  } catch (error) {
    console.warn(error);
  }
};
