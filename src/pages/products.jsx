import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Element/Button/Index";
import Cart from "../components/Fragments/Cart";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

// const products = [
//   {
//     id: 1,
//     name: "Tas Wanita",
//     price: 2000000,
//     image: "img/bag_1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi
//         possimus, officiis quos culpa quidem et mollitia odit vel molestiae
//         consectetur magni similique a obcaecati, non accusamus quasi fugit
//         placea.`,
//   },
//   {
//     id: 2,
//     name: "Tas Wanita 2",
//     price: 1000000,
//     image: "img/bag_1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi
//         possimus, officiis quos culpa `,
//   },
//   {
//     id: 3,
//     name: "Tas Wanita 3",
//     price: 4000000,
//     image: "img/bag_1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi
//         possimus, officiis quos culpa `,
//   },
// ];

const ProductPage = () => {
  // State untuk menyimpan data keranjang belanja
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const { username, handleLogout } = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);//dependency yang diberikan ke dalam array dependencies
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.href = "/login";
  // };

  // Fungsi untuk menambahkan produk ke keranjang belanja
  const handleAddToCart = (id) => {
    // Cek apakah produk sudah ada di dalam keranjang
    if (cart.find(item => item.id === id)) {
      // Jika sudah ada, update jumlah (qty) produk di dalam keranjang
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      )
    }
    else {
      // Jika belum ada, tambahkan produk baru ke dalam keranjang
      setCart([...cart, { id, qty: 1 }])
    }
  };

  //useReff
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [
      ...cartRef.current,
      { id, qty: 1 },
    ];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "block";
    }
    else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-black text-white items-center px-10">
        {username}
        <Button classname="bg-stone-500 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-2">
        <div className="w-4/6 flex flex-wrap h-full">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.HeaderCard image={product.image} id={product.id} />
              <CardProduct.BodyCard name={product.title}>
                {product.description}
              </CardProduct.BodyCard>
              <CardProduct.FooterCard
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-black">Cart Items</h1>
          {/* Menampilkan komponen Cart untuk setiap item dalam keranjang belanja*/}
          {products.length > 0 && cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <Cart key={item.id} bg_color="bg-amber-800">
                <Cart.ImageCart image={product.image} />
                <Cart.BodyCart
                  name={product.title}
                  price={product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                  qty={item.qty}
                  total={(item.qty * product.price).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                />
              </Cart>
            );
          })}
          <div ref={totalPriceRef}>
            <Cart bg_color="bg-black">
              <Cart.TotalCart
                title="Total Belanjaan"
                totalAll={totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "USD",
                })}
              />
            </Cart>
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
