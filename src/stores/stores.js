import { writable } from "svelte/store";


export const cart = writable([]);

export const productsStore = writable([
    {
        id: 1,
        name: "Product 1",
        price: 10,
        image: "https://picsum.photos/id/10/200/300",
            
    },
    {
        id: 2,
        name: "Product 2",
        price: 20,
        image: "https://picsum.photos/id/10/200/300",
            
    },
    {
        id: 3,
        name: "Product 3",
        price: 30,
        image: "https://picsum.photos/id/10/200/300",
            
    },

]);


