import Document from "../../models/sales/document";
import DocumentItem from "../../models/sales/documentItem";
import DocItemVariants from "../../models/sales/docItemVariant";

import { getRepository,getConnection } from "typeorm";
import DocumentFilter from '../../helpers/documentFilter'
import DocumentVariantFilter from '../../helpers/documentVariantFilter'

const findById = async function findById(id: string): Promise<Document> {
  const DocumentRepository = getRepository(Document);

  const item: Document = await DocumentRepository.findOneOrFail(
    {
      relations: ['items', 'serie', 'type'],
      where: { id: id }
    }
  );

  return item;
};

const findByLineId = async function findByLineId(id: number): Promise<DocumentItem> {
  const repository = getRepository(DocumentItem);

  const item: DocumentItem = await repository.findOneOrFail(
    {
      where: { id: id }
    }
  );

  return item;
};



const findAll = async function findAll(typeFilter?: DocumentFilter): Promise<Document[]> {
  const DocumentRepository = getRepository(Document);
  let items: Document[];

  let where: any = {};

  if (!!typeFilter?.type) {
    where["type"] = typeFilter.type
  }

  if (!!typeFilter?.customer) {
    where["customer"] = typeFilter.customer
  }

  console.log(typeFilter)

  if (!!typeFilter?.type) {
    items = await DocumentRepository.find({
      where: where,
      relations: ['items', 'serie', 'type'],
      order: {
        date: "ASC",
        id: "DESC",
      }
    })
  } else {
    items = await DocumentRepository.find({
      relations: ['items', 'serie', 'type'],
      order: {
        date: "ASC",
        id: "DESC",
      }
    })
  }

  return items;
};

const create = async function create(
  item: Document,
): Promise<Document> {
  const DocumentRepository = getRepository(Document);

  const data = DocumentRepository.create(item);

  await DocumentRepository.save(data);

  return data;
};

const addLines = async function addLines(
  item: DocumentItem[],
): Promise<DocumentItem[]> {
  const DocumentRepository = getRepository(DocumentItem);

  const data = DocumentRepository.create(item);

  await DocumentRepository.save(data);

  return data;
};

const itemVariants = async function itemVariants(
  item: DocItemVariants[],
): Promise<DocItemVariants[]> {
  const DocumentRepository = getRepository(DocItemVariants);

  const data = DocumentRepository.create(item);

  await DocumentRepository.save(data);

  return data;
}

const findAllLineVariant = async function findAllLineVariant(
  filter: DocumentVariantFilter,
): Promise<DocItemVariants[]> {
  // Status type - pedding, to approval, approved, rejected
  const repository = getRepository(Document);

  //List of document item without variants
  const document: Document = await repository.findOneOrFail(
    {
      where: { id: filter.documentId },
      relations: ['items', 'items.itemsVariants']
    }
  );

  let items: DocItemVariants[] = []

  switch (filter.status) {
    case 'pedding':
      //Caso 1 não tem variantes 
      document.items?.forEach(item => {

        if (!item.itemsVariants || item.itemsVariants?.length === 0) {
          let newitem: DocItemVariants = {
            id: item.id,
            quantity: item.quantity,
            price: item.price,
            grossTotal: item.grossTotal,
            vatCode: item.vatCode,
            vatTotal: item.vatTotal,
            total: item.total,
            status: filter.status,
            documentItemId: item.id
          };

          items.push(newitem);
        } else {
          let newItems = item.itemsVariants.filter(p => p.status === filter.status)

          items.concat(newItems)
        }
      })
      break;
    default:
      document.items?.forEach(item => {

        if (!!item.itemsVariants) {
          let newItems = item.itemsVariants.filter(p => p.status === filter.status) || []


          if (newItems.length > 0) {
            newItems = newItems.map(p => {
              p.documentItemId = item.id
              return p
            })

            items = [...items, ...newItems]
          }
        }


      })
      break;
  }

  return items;
}

const findApprovedQoutes = async function findApprovedQoutes(id:string): 
  Promise<Document[]>{

    // Status type - pedding, to approval, approved, rejected
  const repository = getRepository(Document);

  const documents: Document[]= await getConnection()
    .createQueryBuilder()
    .select("document")
    .from(Document, "document")
    .innerJoinAndSelect("document.type", "type")
    .innerJoinAndSelect("document.serie", "serie")
    .innerJoinAndSelect("document.items","item")
    .innerJoinAndSelect("item.itemsVariants","variant")
    .where("document.customer = :customer and variant.status = :status", 
      { customer: id, status:"approved" })
    .orderBy("document.date","DESC")
    .getMany();

  return documents;
}

export default {
  create,
  findById,
  findAll,
  addLines,
  itemVariants,
  findByLineId,
  findAllLineVariant,
  findApprovedQoutes
};
