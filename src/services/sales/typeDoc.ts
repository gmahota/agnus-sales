
import TypeDoc from '../../models/sales/typeDoc'
import repository from '../../repository/sales/typeDocRepository'
import TypeFilter from '../../helpers/typeFilter'

const getByCode = (id: string) =>
  repository.findByCode(id)

const getAll = (type?: TypeFilter) =>
  repository.findAll(type)

const create = (item: TypeDoc) =>
  repository.create(item)

export default {
  getAll,
  getByCode,
  create,
}