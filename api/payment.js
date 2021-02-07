/**
 * @docs https://docs.mollie.com/reference/v2/payments-api/get-payment
 */
const { createMollieClient } = require("@mollie/api-client");

const mollieClient = createMollieClient({
  apiKey: process.env.mollie_token,
});

export default async (req) => {
  try {
    const payment = await mollieClient.payments.get(req.body.paymentId);

    console.log(paymentId)

    // Check if payment is paid
    const isPaid = payment.isPaid();

    if (isPaid) {
      console.log("Payment is paid");
    } else {
      console.log(`Payment is not paid, but instead it is: ${payment.status}`);
    }
  } catch (error) {
    console.warn(error);
  }
};
