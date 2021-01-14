
import Order  from '../../models/sales/order'
import OrderRepository  from '../../repository/sales/orderRepository'

const getById = (id:string) =>
    OrderRepository.findById(id)

const getAll = () =>
    OrderRepository.findAll()

const create = (order:Order) =>
  OrderRepository.create(order)

const getByPhoneNumber= (phoneNumber:string) =>
    OrderRepository.findByPhoneNumber(phoneNumber)

export default {
  getAll,
  getById,
  create,
  getByPhoneNumber,
}