import { Request, Response } from "express";
import ProjectService from "../../services/base/project";
import Project from "../../models/base/project";

export const get_all_projects = async (
  request: Request,
  response: Response,
) => {
  const Project = await ProjectService.getAll();
  return response.status(200).json(Project);
};

export const get_project = async (request: Request, response: Response) => {
  const { id } = request.params;

  const Project = await ProjectService.getById(id);

  if (Project) {
    return response.status(200).json(Project);
  }
  return response.status(404).json(
    { msg: "no Project with that phoneNumber" },
  );
};

export const create_project = async (request: Request, response: Response) => {
  const {
    code,
    description,
    status,
  } = await request.body;

  try {
    let Project: Project = {
      id: 0,
      code,
      description,
      status,
    };

    Project = await ProjectService.create(Project);

    return response.status(200).json(Project);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a Project with that i", error: e },
    );
  }
};

export const delete_Project = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await Projectervice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};
