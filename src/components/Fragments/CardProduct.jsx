import { Link } from "react-router-dom";
import Button from "../Element/Button/Index";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-amber-800 border border-amber-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};
const HeaderCard = (props) => {
    const {image, id} = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </Link>
  );
};
const BodyCard = (props) => {
    const {children, name} = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-sm text-white">
          {children.substring(0, 200)}...
        </p>
      </a>
    </div>
  );
};

const FooterCard = (props) => {
  // Menggunakan destructuring untuk nilai price, handleAddToCart, dan id dari props
    // ooioio
  const {price, handleAddToCart,id} = props;
  // Mereturn elemen div yang berisi informasi harga dan tombol "Add To Cart"
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      {/* Menampilkan harga dengan format mata uang Indonesia */}
      <span className="text-xl font-bold text-white">${price.toLocaleString("id-ID", {styles: "currency", currency: "IDR"})}</span>
      {/* Tombol "Add To Cart" yang akan memanggil handleAddToCart saat diklik */}
      <Button classname="bg-slate-400" onClick={()=> handleAddToCart(id)}>Add To Cart</Button>
    </div>
  );
};

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;
export default CardProduct;
