import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();
const PATH_ROUTER = `${__dirname}`;

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`"${cleanName}" route loading...`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
