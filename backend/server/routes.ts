import { Application } from 'express';
import { Database } from "./api/services/mongo/databases/main"
import { InventoryController } from './api/controllers/inventory'
export default function routes(app: Application): void {
  app.use('/api/v1/examples', InventoryController(Database()));
};