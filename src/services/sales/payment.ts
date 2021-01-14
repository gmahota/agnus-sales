
import Payment  from '../../models/sales/payment'
import PaymentRepository  from '../../repository/sales/paymentRepository'


const getById = (id:string) =>
    PaymentRepository.findById(id)

const getAll = () =>
    PaymentRepository.findAll()


const create = (Payment:Payment) =>
  PaymentRepository.create(Payment)

const getByPhoneNumber= (phoneNumber:string) =>
    PaymentRepository.findByPhoneNumber(phoneNumber)

export default {
  getAll,
  getById,
  create,
  getByPhoneNumber,
}