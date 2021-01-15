
import Customer  from '../../models/base/customer'
import CustomerRepository  from '../../repository/base/customer'


const getById = (id:string) =>
    CustomerRepository.findById(id)

const getAll = () =>
    CustomerRepository.findAll()


const create = (Customer:Customer) =>
  CustomerRepository.create(Customer)

const getByPhoneNumber= (phoneNumber:string) =>
    CustomerRepository.findByPhoneNumber(phoneNumber)


export default {
  getAll,
  getById,
  create,
  getByPhoneNumber
}