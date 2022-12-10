

export class Product {
  
 
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  category: string;
  description:string;
  quantity: number;

  
    
    constructor( name: string, brand:string, category: string, price: number, quantity: number, pictureUrl: string, description: string) {
      this.name = name;
      this.price = price;
      this.pictureUrl = pictureUrl;
      this.brand = brand;
      this.category = category;
      this.description = description;
      this.quantity = quantity;
    }
}
 
