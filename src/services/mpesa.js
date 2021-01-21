import {Client} from "@paymentsds/mpesa";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  apiKey: process.env.Mpesa_ApiKey, // API Key
  publicKey: process.env.Mpesa_PublicKey,
  serviceProviderCode: process.env.Mpesa_ServiceProviderCode, // input_ServiceProviderCode

  verifySSL: false,
  debugging: true,
});

const set_ReceiveMoney = async (from,reference,transaction,amount)=>{ 

  let response= {};
  const paymentData = {
    from: from, // input_CustomerMSISDN
    reference: reference, // input_ThirdPartyReference
    transaction: transaction, // input_TransactionReference
    amount: amount, // input_Amount
  };

  await client.receive(paymentData).then((r) => {
    response = r.response;
    response.conversation =r.conversation;
    response.transaction =r.transaction;
    response.reference = r.reference;

    // Handle success scenario
  }).catch((e) => {
    response =e.response;
    //throw e;
  });

  return response;
};

export default {
  set_ReceiveMoney,
};
