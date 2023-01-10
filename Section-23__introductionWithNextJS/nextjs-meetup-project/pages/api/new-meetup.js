// api/new-meetup

import { MongoClient } from "mongodb";

// ONLY POST REQ WILL EXECUTE
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://devangga:devangga@cluster0.xpesq.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetups Inserted" });
  }
}

export default handler;
