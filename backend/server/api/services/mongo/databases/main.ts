import { IDatabase } from "../../../../interfaces/IDatabase";
import { InventoryDatabase } from "./inventory";

export const Database: () => IDatabase =
() => {
    return {
        inventory: InventoryDatabase(),
    }
}