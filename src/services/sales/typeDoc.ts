
import TypeDoc  from '../../models/sales/typeDoc'
import repository  from '../../repository/sales/typeDocRepository'

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