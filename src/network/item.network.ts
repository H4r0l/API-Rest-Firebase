import { Request, Response, Router, NextFunction } from "express";

const router = Router();

const listItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
};

router
    .get("/", listItems)
    .get("/:id", (req: Request, res: Response) => {
        
    })
    .post("/", (req: Request, res: Response) => {
        
    })
    .put("/:id", (req: Request, res: Response) => {
        
    })
    .delete("/:id", (req: Request, res: Response) => {
        
    })

export default router