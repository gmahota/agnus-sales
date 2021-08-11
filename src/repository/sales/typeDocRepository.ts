import SalesType from "../../models/sales/typeDoc";
import { getRepository } from "typeorm";
import TypeFilter from '../../helpers/typeFilter'


const findByCode = async function findById(code: string): Promise<SalesType> {
  const repository = getRepository(SalesType);

  const item: SalesType = await repository.findOneOrFail(
    {
      where: { code: code }
    }
  );

  return item;
};

const findAll = async function findAll(typeFilter?: TypeFilter): Promise<SalesType[]> {
  const repository = getRepository(SalesType);

  if (!!typeFilter?.type) {

    return await repository.find({
      where: { type: typeFilter.type },
      order: { code: 'ASC' }
    });
  } else {
    const itens: SalesType[] = await repository.find({
      order: {
        description: "ASC",
        code: "DESC",
      }
    })

    return itens;
  }


};


const create = async function create(
  item: SalesType,
): Promise<SalesType> {
  const repository = getRepository(SalesType);

  const data = repository.create(item);

  await repository.save(data);

  return data;
};

export default {
  create,
  findByCode,
  findAll
};
