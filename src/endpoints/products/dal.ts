import { ProductModel } from "../../db/products";
import { Product } from "./interface";

const getAllProducts = async (query: Record<string, unknown>) => {
  try {
    const result = await ProductModel.find();
    let products: Product[] = [];
    if (Object.keys(query).length > 0) {
      for (let key in query) {
        if (result.length) {
          products = result.filter((product: Product) => {
            return product[key] == query[key];
          });
        }
      }
      return products;
    }
    return result;
    // const products = results.map((document) => document.toObject());
    // return products;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id: number) => {
  try {
    const result = await ProductModel.findOne({ id: id });
    return result;
    // const product = result?.toObject();
    // return product;
  } catch (error) {
    throw error;
  }
};

const upsert = async (body: Product | Product[]) => {
  try {
    console.log('upsert');
    console.log(body);
    
    if(Array.isArray(body)){
        for(const item of body) {
            // const result = await ProductModel.findOneAndUpdate({ id: item.id }, {quantity: item.quantity}, {new: true});
            const result = await ProductModel.findOneAndUpdate({ id: item.id }, {$inc: {quantity: item.quantity}}, {new: true});
            console.log('if');
            console.log(result);
            if(result === null) {
                console.log('save1');
                
                const newProduct = new ProductModel(item);
                console.log('save2');

                newProduct.save((err)=> {
                    if (err) {
                        console.log('error');
                        return 'boom';
                    }
                });
                console.log('save3');

            }
        }
    }else {
        const result = await ProductModel.findOneAndUpdate({ id: body.id }, {$inc: {quantity: body.quantity}}, {new: true});
        console.log('else');
        
        console.log(result);

        // const result = await ProductModel.findOneAndUpdate({ id: body.id }, {quantity: body.quantity}, {new: true});
        if(result === null) {
            const newProduct = new ProductModel(body);
            await newProduct.save();
        }
    }
    return "cool";
  } catch (err) {
    throw err;
  }
};

const productsDal = {
  getAllProducts,
  getProductById,
  upsert,
};

export default productsDal;
