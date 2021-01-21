import Project from "../../models/base/project";
import { getRepository,getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Project> {
  const ProjectRepository = getRepository(Project);

  const data: Project = await ProjectRepository.findOneOrFail({
      where: {id: id }
    });

  return data;
};

const findAll = async function findAll(): Promise<Project[]> {
  const ProjectRepository = getRepository(Project);

  const data: Project[] = await ProjectRepository.find({
    order: {
      description: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: Project
): Promise<Project> {
  const ProjectRepository = getRepository(Project);

  await ProjectRepository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};
