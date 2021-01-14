import Payment from "../../models/sales/payment";
import { getRepository } from "typeorm";

import { v4 as uuidv4 } from "uuid";
import PaymentMpesaLog from "../../models/sales/paymentMpesaLog";

import Mpesa from "../../services/mpesa";

interface Key {
  id?: any;
}

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Payment> {
  const PaymentRepository = getRepository(Payment);

  const payment: Payment = await PaymentRepository.findOneOrFail({
      where: {id: id }
    });

  return payment;
};

const findAll = async function findAll(): Promise<Payment[]> {
  const PaymentRepository = getRepository(Payment);

  const Payments: Payment[] = await PaymentRepository.find({
    order: {
      date: "ASC",
      id: "DESC",
    },
  });

  return Payments;
};

const findByPhoneNumber = async function findByName(
  name: string,
): Promise<Payment[]> {
  const PaymentRepository = getRepository(Payment);

  const Payments: Payment[] = await PaymentRepository.find({
    order: {
      date: "ASC",
      id: "DESC",
    },
  });

  return Payments;
};

const create = async function create(
  payment: Payment,
): Promise<Payment> {
  try {
    const PaymentRepository = getRepository(Payment);
    const PaymentMpesaLogRepository = getRepository(PaymentMpesaLog);

    const mpesaResponse = await Mpesa.set_ReceiveMoney(
      payment.phoneNumber,
      payment.reference,
      payment.reference,
      payment.amount,
    );

    const mpesaLog: PaymentMpesaLog = await PaymentMpesaLogRepository.create({
      ...mpesaResponse,
    });

    await PaymentMpesaLogRepository.save(mpesaLog);

    const sucessStatus = ["201", "200"];

    if (mpesaLog.status=="201" || mpesaLog.status=="200" ) {
      payment.paymentMpesaLog = mpesaLog;
    
      payment = await PaymentRepository.create(payment);
      await PaymentRepository.save(payment);

      return payment;
    }else{
        throw new Error(JSON.stringify(mpesaLog))
    }
  } catch (e) {
      throw e
  }
};

export default {
  create,
  findById,
  findAll,
  findByPhoneNumber,
};
