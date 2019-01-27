import express from 'express';
import { Request, Response, Router } from 'express';

import { IDatabase } from "../../interfaces/IDatabase";
import { IInventory } from "../../interfaces/IInventory";

export const InventoryController: (db: IDatabase) => Router =
(db: IDatabase) => {
    const router: Router = Router();

    router.post("/", async (req: Request, res: Response) => {
        try {
            const newInventoryBody: IInventory = req.body;
            const newInventory = await db.inventory.create(newInventoryBody);
            res.json(newInventory);
        } catch (e) {
            res.status(422).json(e);
        }
   })

    return router;
    
}