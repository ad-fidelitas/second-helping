import { IInventory } from "./IInventory";

import { IRessourceDatabase } from "./IRessourceDatabase";

export interface IDatabase {
    inventory: IRessourceDatabase<IInventory>;
}