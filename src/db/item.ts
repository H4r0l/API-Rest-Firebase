import { Schema, Types, model } from "mongoose";
import { Item } from "../interfaces/item.interface";

const ItemSchema = new Schema<Item>(
    {
        /*Create a new item schema that has a title, a description, a rating as a float.*/
        Title: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
        Rating: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
)
const ItemModel = model("items", ItemSchema);
export default ItemModel;