import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import StarRating from "../components/Fragments/StarRating";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="bg-slate-100">
      {Object.keys(product).length > 0 && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-2/4">
            <img
              src={product.image}
              alt="product"
              className="p-8 rounded-lg w-full h-screen object-cover"
            />
          </div>
          <div className="flex flex-col w-2/4 p-8">
            <p className="text-4xl text-black font-bold">{product.title}</p>
            <StarRating star={product.rating.rate} reviews={product.rating.count} />
            <p className="text-md text-black font-bold my-3">Categories</p>
            <p className="text-sm border border-black rounded p-2 w-fit bg-black text-white">
              {product.category}
            </p>
            <p className="text-lg font-bold uppercase mt-8">Description</p>
            <p className="text-md">
              {product.description}
            </p>

            <hr className="my-5 border border-slate-400" />
            <p className="text-2xl text-black font-bold">$ {product.price.toLocaleString("id-ID", {
              styles: "currency",
              currency: "USD",
            })}</p>
          </div>
        </div>
      )}
    </div>

  );
};
export default DetailProductPage;
