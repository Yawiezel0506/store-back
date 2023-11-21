import { Request, Response } from "express";
import productService from "./services";
import { Product } from "./interface";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const products = await productService.getAllProducts(query);
    if (!products) {
      return res.status(500).send("Something went wrong!");
    }
    res.status(200).json(products);
  } catch (error) {
    error = error as string;
    res.status(404).json({ error: error });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(Number(id));
    if (!product) {
      return res.status(500).send("Something went wrong!");
    }
    res.status(200).json(product);
  } catch (error) {
    error = error as string;
    res.status(404).json({ error: error });
  }
};

const upsert = async (req: Request, res: Response) => {
  try {
    const body = req.body ? req.body : [];
    console.log(req.body);
    const product = await productService.upsert(body);
    if (!product) {
      return res.status(500).send("Something went wrong!");
    }
    res.status(200).json(product);
  } catch (error) {
    error = error as string;
    res.status(404).json({ error: error });
  }
};

const productController = {
  getAllProducts,
  getProductById,
  upsert,
};
export default productController;
