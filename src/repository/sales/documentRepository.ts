import Document from "../../models/sales/document";
import { getRepository } from "typeorm";


const findById = async function findById(id: string): Promise<Document> {
  const DocumentRepository = getRepository(Document);

  const item: Document = await DocumentRepository.findOneOrFail(
    { 
      relations:['items','serie','type'],
      where: { id: id }
    }    
  );

  return item;
};

const findAll = async function findAll(): Promise<Document[]> {
  const DocumentRepository = getRepository(Document);

  const items: Document[] = await DocumentRepository.find({
    relations:['items','serie','type'],
    order: {
      date: "ASC",
      id: "DESC",
    }
  })

  return items;
};

const create = async function create(
  item: Document,
): Promise<Document> {
  const DocumentRepository = getRepository(Document);

  const data  = DocumentRepository.create(item);

  await DocumentRepository.save(data);

  return data;
};

export default {
  create,
  findById,
  findAll
};
