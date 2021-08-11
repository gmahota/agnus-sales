
import Doc from '../../models/sales/document'
import repository from '../../repository/sales/documentRepository'
import DocumentFilter from '../../helpers/documentFilter'

const getById = (id: string) =>
  repository.findById(id)

const getAll = (type?: DocumentFilter) =>
  repository.findAll(type)

const create = (item: Doc) =>
  repository.create(item)


export default {
  getAll,
  getById,
  create
}