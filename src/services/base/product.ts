
import Product  from '../../models/base/product'
import ProductRepository  from '../../repository/base/product'

const getById = (id:string) =>
    ProductRepository.findById(id)

const getAll = () =>
    ProductRepository.findAll()

const create = (Product:Product) =>
  ProductRepository.create(Product)

export default {
  getAll,
  getById,
  create
}