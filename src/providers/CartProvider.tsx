import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { CartItem, Product } from '../types';

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem['size']) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
});
const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (product: Product, size: CartItem['size']) => {
    // if already item in the cart increase the quantity

    const newCartItem: CartItem = {
      id: '1',
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };
  // update quantity

  console.log(items);
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
