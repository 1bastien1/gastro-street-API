export interface Dishe {
    name: string,
    price: number,
    currency: ['euro', 'dollar'],
    allergens: string[],
    ingredients: string[],
 }

 export interface Review {
    comments: string;
    idDishe: number;
    note: number;
    noteTaste: number;
    noteQP: number;
    author: string;
  }

  export interface Restaurant {
    name: string;
    addr: string;
    cp: string;
    city: string;
 };