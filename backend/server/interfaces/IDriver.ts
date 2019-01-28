import { IInventory } from "./IInventory";

import { IRessourceDriver } from "./IRessourceDriver";

export interface IDriver {
    inventory: IRessourceDriver<IInventory>;
}