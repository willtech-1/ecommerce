import { connectMongoose } from "../../lib/connectDB";
// import Product model
import Product from "../../models/Product";

// get All products
export async function getAllProducts() {
  return Product.find().exec();
}

export default async function handle(req, res) {
  await connectMongoose();

  // destructure ids
  const { ids } = req.query;
  // check if request parameters have ids or not

  if (ids) {
    const idsArray = ids.split(",");
    res.json(
      await Product.find({
        _id: { $in: idsArray },
      }).exec()
    );
  } else {
    res.json(await getAllProducts());
  }
}
