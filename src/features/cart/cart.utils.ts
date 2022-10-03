import { Product } from '../../constants/types';

export const findItemInCart = (
  id: number,
  cartItems: Product[]
): Product | undefined => {
  return cartItems?.find(cartItem => cartItem.id === id);
};

export const addItemToCart = (
  cartItemToAdd: Product,
  cartItems: Product[]
): Product[] => {
  const existingCartItem = findItemInCart(cartItemToAdd.id, cartItems);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: Product[],
  cartItemToRemove: Product
) => {
  const existingCartItem = findItemInCart(cartItemToRemove.id, cartItems);

  if (!existingCartItem) return cartItems;

  if (existingCartItem.quantity === 1)
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const selectCartItemsCount = (cartItems: Product[]): number =>
  cartItems?.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

export const selectCartTotal = (cartItems: Product[]): number =>
  cartItems?.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );

export const updateItemInCart = (
  cartItemToUpdate: Product,
  cartItems: Product[]
): Product[] => {
  const existingCartItem = findItemInCart(cartItemToUpdate.id, cartItems);

  if (!existingCartItem) return cartItems;

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToUpdate.id ? { ...cartItemToUpdate } : cartItem
  );
};
