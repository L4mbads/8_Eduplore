import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import db from "../db/connection.js";

export const insertUser = async (req, res) => {
    try {

        let collection = await db.collection("users");
        const existingEmail = await collection.findOne({ email: req.body.email });

        if (existingEmail) {
            return res.status(400).send({ message: "Email sudah dipakai!" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let newDocument = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            username: req.body.username,
            password: hashedPassword,
        };
        let result = await collection.insertOne(newDocument);
        res.status(203).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
};

export const getAllUsers = async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
}

export const getUserByEmail = async (req, res) => {
    let collection = await db.collection("users");
    let query = { email: req.params.email };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
};

