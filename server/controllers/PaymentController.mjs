import Payment from "../models/Payment.mjs";

export const newPayment = async (req, res) => {
  const { products, userName, paymentType, cardNumber, amount } = req.body;

  Payment.create({
    products,
    userName,
    paymentType,
    cardNumber,
    amount,
    transactionDateTime: new Date(),
  })
    .then((Payment) => {
      console.log({ status: "Success", Payment });
      return res.json(Payment);
    })
    .catch((err) => {
      console.log({ status: "Error", err });
      return res.json({ status: "Error", err });
    });
};

export const getAllPayment = async (req, res) => {
  Payment.find()
    .then((Payment) => {
      return res.json(Payment);
    })
    .catch((err) => {
      console.log({ status: "Error", err });
      return res.json({ status: "Error", err });
    });
};
