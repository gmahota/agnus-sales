import Company from "../../models/base/company";
import { getRepository,getConnection } from "typeorm";
import Order from '../../models/sales/order';

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Company> {
  const CompanyRepository = getRepository(Company);

  const item: Company = await CompanyRepository.findOneOrFail({
      where: {id: id }
    });

  return item;
};

const findAll = async function findAll(): Promise<Company[]> {
  const CompanyRepository = getRepository(Company);

  const items: Company[] = await CompanyRepository.find({
    order: {
      name: "ASC",
      id: "DESC",
    },
  });

  return items;
}

const findByPhoneNumber = async function findByPhoneNumber(phoneNumber: string): Promise<Company> {
  const CompanyRepository = getRepository(Company);

  const item: Company = await CompanyRepository.findOneOrFail({
      where: {phoneNumber: phoneNumber }
    });

  return item;
};

const create = async function create(
  item: Company
): Promise<Company> {
  const CompanyRepository = getRepository(Company);

  await CompanyRepository.save(item);

  return item;
};

export default {
  create,
  findAll,
  findById,
  findByPhoneNumber
};
