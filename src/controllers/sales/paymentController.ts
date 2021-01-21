import { Request, Response } from "express";
import PaymentService from "../../services/sales/payment";
import OrderService from "../../services/sales/order";
import Order from "../../models/sales/order";
import Payment from './../../models/sales/payment';

export const get_all_payments = async (request: Request, response: Response) => {
  const Payment = await PaymentService.getAll();
  return response.status(200).json(Payment);
};

export const get_payment = async (request: Request, response: Response) => {
  const { id } = request.body;

  const payment = await PaymentService.getById(id);

  if (payment) {
    return response.status(200).json(payment);
  }
  return response.status(404).json({ msg: "no payment with that id" });
};

export const create_payment = async (request: Request, response: Response) => {
  const {
    date,
    phoneNumber,
    reference,
    transaction,
    amount,
    type,
    status,
    orderId,
  } = await request.body;

  try {
    const order: Order = await OrderService.getById(orderId);

    let payment: Payment= {
      id: 0,
      date,
      phoneNumber,
      reference,
      transaction,
      amount,
      type,
      status,
      order
    };

    payment = await PaymentService.create(payment);

    return response.status(200).json(payment);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a payment with that i", error:e },
    );
  }
};

export const delete_order = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await Paymentervice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};
