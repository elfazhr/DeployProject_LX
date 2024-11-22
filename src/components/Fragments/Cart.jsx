const Cart = (props) => {
  const { children, bg_color } = props;
  return (
    <div className={`w-full max-w-sm ${bg_color} border border-amber-700 rounded-lg shadow my-2 flex`}>
      {children}
    </div>
  );
};

const ImageCart = (props) => {
  const { image } = props;
  return <img src={image} className="p-2 rounded-t-lg h-24 w-full object-cover " />;
};

const BodyCart = (props) => {
  const { total, name, price, qty } = props;
  return (
    <div className="p-2 w-full">
      <div className="flex justify-between">
        <p className="text-md text-white">{name.substring(0, 12)}...</p>
        <p className="text-md text-white font-bold">${price}</p>
      </div>
      <h5 className="text-md font-semibold tracking-tight text-white">
        Qty : {qty}
      </h5>
      <span className="text-md font-bold text-yellow-400">
        Total : ${total}
      </span>
    </div>
  );
};

const TotalCart = (props) => {
  const { title, totalAll} = props;
  return (
    <div className="p-2 w-full flex justify-between">
      <p className="text-md text-white">{title}</p>
      <p className="text-md text-white font-bold">${totalAll}</p>
    </div>
  );
};

Cart.ImageCart = ImageCart;
Cart.BodyCart = BodyCart;
Cart.TotalCart = TotalCart;
export default Cart;
