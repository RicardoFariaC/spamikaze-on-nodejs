import { Application } from "express";
import bodyParser from "body-parser";
import IpRoutes from "./IpRemove.routes";

const routes = (app: Application) => {
  app.use(bodyParser.json(), IpRoutes);
};

export default routes;
