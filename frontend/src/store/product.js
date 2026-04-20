import {create} from "zustand";
// returun an object with the state and the functions to update the state
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "Please fill all the fields."};
        }
        const res = await fetch("/api/products",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({products: [...state.products, data.data]}));
        }
        return {success: true, message: "Product created successfully."};
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success) {
            set({products: data.data});
        }
    },
    deleteProduct: async (id) => {
        const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
        const data = await res.json();
        if (data.success) {
            set((state) => ({
                products: state.products.filter((p) => p._id !== id)
            }));
        }
        return {success: data.success, message: data.message};
    },
    updateProduct: async (id, updatedProduct) => {
        const res = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedProduct)
        });
        const data = await res.json();
        if (data.success) {
            // update the ui immediately without refetching the products
            set((state) => ({
                products: state.products.map((p) => (p._id === id ? data.data : p))
            }));
        }
        return {success: data.success, message: data.message};
    }
}));

