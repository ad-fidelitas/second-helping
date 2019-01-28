import { Document, Schema, Model, model } from "mongoose";
import { IInventory } from "../../../../interfaces/IInventory";

export interface IInventoryModel extends IInventory, Document {}

const ingredientSchema: Schema = new Schema({
    location: {
        lat: Number,
        lng: Number,
    },
    foods: [String],
});


let Inventory: Model<IInventoryModel>;
try {
  Inventory = model("Ingredient");
} catch (err) {
  Inventory = model("Ingredient", ingredientSchema);
}

export {Inventory};
