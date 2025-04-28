import { create } from 'zustand'

export const useProductsStore = create((set) => ({
  products: [],
updateProduct: (newProduct: any) => 
    set((state: any) => ({ products: [...state.products, newProduct] })),
}))