
import Doc from '../../models/sales/document'
import DocItemVariant from '../../models/sales/docItemVariant'

import DocumentItem from '../../models/sales/documentItem'
import repository from '../../repository/sales/documentRepository'
import DocumentFilter from '../../helpers/documentFilter'
import DocumentVariantFilter from '../../helpers/documentVariantFilter'

const getById = (id: string) =>
  repository.findById(id)

const getAll = (type?: DocumentFilter) =>
  repository.findAll(type)

const create = async (item: Doc) => {
  let doc = item
  let items: DocumentItem[] =
    doc.items?.filter(item => item.id === 0) || []

  doc.items = doc.items?.filter(item => item.id != 0)

  doc = await repository.create(doc)

  for (var i = 0; i < items.length; i++) {
    items[i].invoice = doc
  }

  await repository.addLines(items)

  return await getById(doc.id.toString())
}

const createOrUpdate = async (items: DocItemVariant[]) => {

  for (var i = 0; i < items.length; i++) {
    let docItem: DocumentItem = await repository.findByLineId(items[i].documentItemId || 0)
    items[i].documentItem = docItem
  }

  return await repository.itemVariants(items)
}

const getAllDocumentVariants = (filter: DocumentVariantFilter) =>
  repository.findAllLineVariant(filter)

const getApprovedQoutes = (id:string) =>
  repository.findApprovedQoutes(id)

export default {
  getAll,
  getById,
  create,
  createOrUpdate,
  getAllDocumentVariants,
  getApprovedQoutes
}