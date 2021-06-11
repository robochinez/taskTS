type cartItem = {
  product: {
    name?: string;
    price: number;
  };
  qty: number;
};

const getSubtotal = (cartItem: cartItem): number => {
  return cartItem.product.price * cartItem.qty;
};
let resultT: cartItem = {
  product: {
    name: "chinez",
    price: 123,
  },
  qty: 456,
};

console.log(getSubtotal(resultT));

type cart = {
  items: cartItem[];
};

let resultTT: cart = {
  items: [
    { product: { price: 20 }, qty: 2 },
    { product: { price: 10 }, qty: 1 },
  ],
};
const getCartTotal = (cart: cart): number => {
  return cart.items
    .map((item) => getSubtotal(item))
    .reduce((total, price) => total + price, 0);
};

// let cartS: cart = {
//   items: [resultTT, resultTT],
// };

console.log(getCartTotal(resultTT));
