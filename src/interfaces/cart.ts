interface Product {
    [x: string]: any;
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    attributes: Attributes[];
    count: number;
    quantity: number;
  }
  
  interface Attributes {
    key: string;
    value: number | string;
  }
  
  interface UsersInterface {
    save(): unknown;
    userName: string;
    email: string;
    password: string;
  }
  
  interface UserValid {
    email: string,
    password: string
  }
  
  interface ProductCart {
    productId: string
    quantity: number
  }
  
  interface Cart {
    toObject(): Cart;
    userId:string,
    product:ProductCart[]
  }
  

  export { 
    Product, 
    Attributes, 
    UsersInterface,
    UserValid ,
    Cart,
    ProductCart
  };