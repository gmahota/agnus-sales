
import Doc from '../../models/sales/document'
import repository from '../../repository/sales/documentRepository'

const getById = (id: string) =>
  repository.findById(id)

const getAll = () =>
  repository.findAll()

const create = (item: Doc) =>
  repository.create(item)


export default {
  getAll,
  getById,
  create
}