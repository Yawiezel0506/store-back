import { Schema, Model } from "mongoose";
import { ProductCart, Cart } from "./interfaces";

import mongoose from "mongoose";

const productCartSchema:Schema<ProductCart> = new Schema<ProductCart>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },

});

const cartSchema:Schema<Cart> = new Schema<Cart>({
  userId: { type: String, required: true },
  product: { type: [productCartSchema], required: true },

});

export const  CartModel: Model<Cart> = mongoose.model<Cart>('cart', cartSchema)

