import { Request, Response } from "express";
import IpRemove from "../models/IpRemove.model";

export class IpRemoveController {
  static async getAllIps(req: Request, res: Response) {
    try {
      const allIps = await IpRemove.findAll();
      return res.status(201).json(allIps);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
