import { Router } from "express";
import { IpRemoveController } from "../controllers/IpRemove.controller";

const routes = Router();

routes.get("/ip", IpRemoveController.getAllIps);

export default routes;
