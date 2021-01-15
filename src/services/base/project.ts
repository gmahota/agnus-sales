
import Project  from '../../models/base/project'
import ProjectRepository  from '../../repository/base/project'

const getById = (id:string) =>
    ProjectRepository.findById(id)

const getAll = () =>
    ProjectRepository.findAll()

const create = (Project:Project) =>
  ProjectRepository.create(Project)

export default {
  getAll,
  getById,
  create
}