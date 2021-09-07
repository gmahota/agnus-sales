import Document from "../../models/sales/document";
import DocumentItem from "../../models/sales/documentItem";
import DocItemVariants from "../../models/sales/docItemVariant";

import { getRepository } from "typeorm";
import DocumentFilter from '../../helpers/documentFilter'

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

const findAll = async function findAll(typeFilter?: DocumentFilter): Promise<Document[]> {
  const DocumentRepository = getRepository(Document);
  let items: Document[];

  if (!!typeFilter?.type) {
    items = await DocumentRepository.find({
      where: { type: typeFilter.type },
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

export default {
  create,
  findById,
  findAll,
  addLines
};
