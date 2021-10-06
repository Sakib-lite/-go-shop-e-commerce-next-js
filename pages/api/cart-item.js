import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sakibulanwar:CNnFPruxhEBayMEt@cart-items.mzohg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const cartCollectios = db.collection("cartItem");
    const result = await cartCollectios.insertOne(data);
    client.close();
    res.status(200).json({ message: "seccesful" });
  }
}

export default handler;
