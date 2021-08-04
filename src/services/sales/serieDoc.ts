
import Serie  from '../../models/sales/serieDoc'
import repository  from '../../repository/sales/serieDocRepository'

const getByCode = (id:string) =>
repository.findByCode(id)

const getAll = () =>
repository.findAll()

const create = (item:Serie) =>
repository.create(item)

export default {
  getAll,
  getByCode,
  create,
}