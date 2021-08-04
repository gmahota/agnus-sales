import SerieDoc from "../../models/sales/serieDoc";
import { getRepository } from "typeorm";

const findByCode = async function findById(code: string): Promise<SerieDoc> {
  const repository = getRepository(SerieDoc);

  const item: SerieDoc = await repository.findOneOrFail(
    { 
      where: { code: code }
    }    
  );

  return item;
};

const findAll = async function findAll(): Promise<SerieDoc[]> {
  const repository = getRepository(SerieDoc);

  const itens: SerieDoc[] = await repository.find({
    order: {
      description: "ASC",
      code: "DESC",
    }
  })

  return itens;
};


const create = async function create(
  item: SerieDoc,
): Promise<SerieDoc> {
  const repository = getRepository(SerieDoc);

  const data  = repository.create(item);

  await repository.save(data);

  return data;
};

export default {
  create,
  findByCode,
  findAll
};
