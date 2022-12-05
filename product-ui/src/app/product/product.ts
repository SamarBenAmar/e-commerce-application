

export class Product {
  
  id: string;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  category: string;
  description:string;
  quantity: number;
    
    constructor(id: string, name: string, brand:string, category: string, price: number, quantity: number, pictureUrl: string, description: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.pictureUrl = pictureUrl;
      this.brand = brand;
      this.category = category;
      this.description = description;
      this.quantity = quantity;
    }
}
 
