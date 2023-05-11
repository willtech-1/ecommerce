import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../components/ProductsContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);

  // personal info state
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // cart products state
  const [productsInfo, setProductsInfo] = useState([]);

  // fecth added to cart products
  useEffect(() => {
    // remove duplicated ids
    const uniqueIds = [...new Set(selectedProducts)];
    fetch("/api/products?ids=" + uniqueIds.join(","))
      .then((res) => res.json())
      .then((json) => setProductsInfo(json));
  }, [selectedProducts]);

  // add more product button
  const addBBtn = (id) => {
    setSelectedProducts((prev) => [...prev, id]);
  };
  // minus product button
  const reduceBtn = (id) => {
    // check if we have an id
    const position = selectedProducts.indexOf(id);
    if (position !== -1) {
      // return new products
      // const newProducts = selectedProducts.
      setSelectedProducts((prev) => {
        return prev.filter((value, index) => index !== position);
      });
    }
  };

  //delivery price

  // calculate total
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfo.find((p) => p._id === id)?.price || 0;
      subtotal += price;
    }
  }

  const total = subtotal;
  return (
    <Layout>
      {!productsInfo.length && (
        <div>
          Your cart is empty, start shopping{" "}
          <Link href={"/"}>
            <a>
              <span>Start Shopping</span>
            </a>
          </Link>
        </div>
      )}
      {productsInfo.length &&
        productsInfo.map((productInfo) => {
          //   if amount === 0 return
          const amount = selectedProducts.filter(
            (id) => id === productInfo._id
          ).length;
          if (amount === 0) return;
          return (
            <div className="flex mb-5 mt-24" key={productInfo._id}>
              <div className="bg-gray-100 p-3 rounded-xl shrink-0">
                <img className="w-24" src={productInfo.picture} alt="picture" />
              </div>
              <div className="pl-4">
                <h4 className="font-bold text-lg">{productInfo.name}</h4>
                <p className="text-sm leading-4 text-gray-500">
                  {productInfo.description}
                </p>
                <div className="flex">
                  <div className="grow">R {productInfo.price.toFixed(2)}</div>
                  <div>
                    <button
                      onClick={() => reduceBtn(productInfo._id)}
                      className="border border-emerald-500 px-2 rounded-lg text-gray-500"
                    >
                      -
                    </button>
                    <span className="px-2">
                      {
                        selectedProducts.filter((id) => id === productInfo._id)
                          .length
                      }
                    </span>

                    <button
                      onClick={() => addBBtn(productInfo._id)}
                      className="bg-emerald-500 px-2 rounded-lg text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* how many items of that product were selected */}
              </div>
            </div>
          );
        })}
      <div className="mt-4">
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="text"
          placeholder="Residential Address"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="text"
          placeholder="City, Postal Code"
        />
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
          type="mail"
          placeholder="Email"
        />
      </div>

      {/* Checkout summary */}
      <div className="mt-4">
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-500">Subtotal:</h3>
          <h4 className="font-bold">R {subtotal.toFixed(2)}</h4>
        </div>
        {/* <div className="flex my-3">
          <h3 className="grow font-bold text-gray-500">Delivery:</h3>
          <h4 className="font-bold">R {deliveryPrice.toFixed(2)}</h4>
        </div> */}
        <div className="flex my-3 border-t pt- border-dashed border-emerald-500">
          <h3 className="grow font-bold text-gray-500">Total:</h3>
          <h4 className="font-bold">R {total.toFixed(2)}</h4>
        </div>
        <button className="bg-emerald-500 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-100 shadow-xl">
          <h3>Pay R{total.toFixed(2)}</h3>
        </button>
      </div>
    </Layout>
  );
}
