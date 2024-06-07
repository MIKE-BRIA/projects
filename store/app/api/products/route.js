import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

/**
 * @param {Get} getting product data from the database
 * @param {Post} setting product data to the database
 * @param {*} next
 */

export async function POST(req) {
  try {
    // console.log(req.json());
    await mongooseConnect();

    const { title, description, price, category, images } = await req.json();

    // Ensure the required fields are provided
    if (!title || !description || !price || !category || !images) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const productDoc = await Product.create({
      title,
      description,
      price,
      category,
      images,
    });

    return new Response(JSON.stringify(productDoc), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

//*Get products from database
export async function GET(req) {
  await mongooseConnect();
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  const category = searchParams.get("category");

  /**
   * get product that already exists using the id
   * @params {else} add a new product
   */
  if (id) {
    const product = await Product.findOne({ _id: id });

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else if (category) {
    const products = await Product.find({ category }).sort({ createdAt: -1 });
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      return new Response(JSON.stringify(products), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch products" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
}

/**
 * @param {delete} delete an existing product
 * @param {*} res
 * @returns roduct id of product deleted
 */
export async function DELETE(req, res) {
  try {
    await mongooseConnect();
    // console.log(new URL(req.url));
    // Extract the id from the request URL query parameters
    const { searchParams } = new URL(req.url);
    // console.log(searchParams);
    const id = searchParams.get("_id");
    // console.log(id);

    if (!id) {
      console.error("No id provided");
      return new Response(JSON.stringify({ error: "No id provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const productId = await Product.deleteOne({ _id: id });

    // Send a success response back to the client
    return new Response(JSON.stringify(productId), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: "Failed to delete product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(req) {
  try {
    await mongooseConnect();

    const { title, description, price, category, images, _id } =
      await req.json();

    await Product.updateOne(
      { _id },
      { title, description, price, category, images }
    );

    return new Response(JSON.stringify("Update was successful"), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: "Failed to update Product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
