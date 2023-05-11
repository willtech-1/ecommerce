import { useEffect, useState } from "react";

import Product from "../components/Product";
import { connectMongoose } from "../lib/connectDB";
import { getAllProducts } from "./api/products";

import Layout from "../components/Layout";
import Reviews from "../components/Reviews";
import Badges from "../components/Badges";
import Contact from "../components/Contact";
import Map from "../components/Map";

export default function Home({ products }) {
  // products state
  // search bar state
  const [keyword, setKeyword] = useState("");

  // category names and remove duplicates
  const categoryNames = [...new Set(products.map((p) => p.category))];

  // check if there is anyword typed on the search bar
  // let products;
  if (keyword) {
    // if true there is a word typed
    products = products.filter((p) => p.name.toLowerCase().includes(keyword));
  }
  return (
    <>
      <Layout>
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          type="text"
          placeholder="Search for products..."
          className="bg-gray-100 w-full py-2 px-4 rounded-xl outline-grey-500 mt-24 outline-none"
        />
        <div>
          {/* categories */}
          {categoryNames.map((categoryName) => (
            <div key={categoryName}>
              {products.find((p) => p.category === categoryName) && (
                <div>
                  <h2 className=" mt-4 py-5 capitalize text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {categoryName}
                  </h2>
                  <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                    {products
                      .filter((p) => p.category === categoryName)
                      .map((productInfo) => (
                        <div key={productInfo._id} className="px-5 snap-start">
                          {/* pass all the produc information props */}
                          <Product {...productInfo} />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Reviews />
        <br />
        <Contact />
        <br />
        <Map />
        <br />
        <Badges />
        <br />
      </Layout>
      <br />
    </>
  );
}

// fetch products rendering from the server side
export async function getServerSideProps() {
  await connectMongoose();

  const products = await getAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
