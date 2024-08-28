import { ObjectId } from "mongodb";
import { dbProgram } from "../db/connection.js";

export const getBeasiswa = async (req, res) => {

    let collection = await dbProgram.collection("scholarships");
    const { name, place, component, degree, count } = req.query

    let query = {}
    if (name) query.name = { $regex: name, $options: 'i' };
    if (place) query.place = place;
    if (component) query.component = component;
    if (degree) query.degree = degree;



    let results = await collection.find(query).limit(parseInt(count)).toArray();

    if (!results) return res.status(404).json({ message: "Not found" });
    res.send(results).status(200);
}