import { Request, Response, Router, NextFunction } from "express";

const router = Router();

const listItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      res.status(200).send({
    req
  });
  next();
  } catch (error) {
      next(error);
  }
};
const findItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
      res.status(200).send({
        req,
      });
      next();
    } catch (error) {
      next(error);
    }
};
const postItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
      res.status(200).send({
        req,
      });
      next();
    } catch (error) {
      next(error);
    }
};
const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
      res.status(200).send({
        req,
      });
      next();
    } catch (error) {
      next(error);
    }
};
const deleteItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
      res.status(200).send({
        req,
      });
      next();
    } catch (error) {
      next(error);
    }
};
router
  .get("/", listItems)
  .get("/:id", findItem)
  .post("/", postItem)
  .put("/:id", updateItem)
  .delete("/:id", deleteItem);

export {router};