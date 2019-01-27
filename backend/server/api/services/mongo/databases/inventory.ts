import { Inventory, IInventoryModel } from "../models/Inventory";
import { IInventory } from "../../../../interfaces/IInventory";
import { IRessourceDatabase } from "../../../../interfaces/IRessourceDatabase";

export const InventoryDatabase: () => IRessourceDatabase<IInventory> = 
() => {
    return ({
        async fetch(id: string): Promise<IInventoryModel> {
            return Inventory.findById(id).exec();
        },
    
        async create(ressourceInfo: IInventory): Promise<IInventoryModel> {
            return Inventory.create(ressourceInfo);
        },
    
        async destroy(id: string): Promise<IInventoryModel> {
            return Inventory.findByIdAndDelete(id).exec();
        },
    
        async update(id: string, ressourceInfo) {
            return Inventory.findByIdAndUpdate(id, ressourceInfo, {new: true} ).exec();
       }, 
    })
}