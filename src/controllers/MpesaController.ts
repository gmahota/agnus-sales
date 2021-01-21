import { Request, Response } from "express";
import Mpesa from "../services/mpesa";

const receiveMoney = async function (request: Request, response: Response) {
    const { from ,reference,transaction,amount} = request.body;

    try{ 
        const response_mpesa = await Mpesa.set_ReceiveMoney(from,reference,transaction,amount);
        console.log(response_mpesa)
        return response.status(200).json(response_mpesa);
    }catch(e){
        return response.status(401).json({ msg: e });
    }    
  };

  export default {
    receiveMoney
  };
  