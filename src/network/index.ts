import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();
const pathRouter = `${__dirname}`;

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
};

readdirSync(pathRouter).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(` Loading route "${cleanName}"...`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    };
});

export { router };