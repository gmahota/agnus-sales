
import TypeDoc  from '../../models/sales/typeDocument'
import repository  from '../../repository/sales/typeDocumentRepository'

const getByCode = (id:string) =>
repository.findByCode(id)

const getAll = () =>
repository.findAll()

const create = (item:TypeDoc) =>
repository.create(item)

export default {
  getAll,
  getByCode,
  create,
}