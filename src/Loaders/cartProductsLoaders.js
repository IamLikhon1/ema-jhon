import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaders= async()=>{
    const loadedProducts=await fetch('products.json')
    const products= await loadedProducts.json();

    const storeCart=getShoppingCart()
    const saveCart=[];
    
    for(const id in storeCart){
        const addedProducts= products.find(pb=> pb.id===id);
        if(addedProducts){
            const quantity=storeCart[id];
            addedProducts.quantity=quantity
            saveCart.push(addedProducts)
        }
    }
    return saveCart

}
export default cartProductsLoaders;