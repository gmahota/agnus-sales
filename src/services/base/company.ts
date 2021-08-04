
import Company from '../../models/base/company'
import CompanyRepository from '../../repository/base/company'


const getById = (id: string) =>
  CompanyRepository.findById(id)

const getAll = () =>
  CompanyRepository.findAll()


const create = (item: Company) =>
  CompanyRepository.create(item)

const getByPhoneNumber = (phoneNumber: string) =>
  CompanyRepository.findByPhoneNumber(phoneNumber)


export default {
  getAll,
  getById,
  create,
  getByPhoneNumber
}