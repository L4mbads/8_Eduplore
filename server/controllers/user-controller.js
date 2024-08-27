
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import db from "../db/connection.js";
import createSecretToken from "../utils/token.js";

export const insertUser = async (req, res) => {
    try {
        const response = await fetch(`http://localhost:5050/user-management/users?email=${req.body.email}`);

        if (response.ok) {
            return res.status(400).json({ message: "Email sudah dipakai!" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let newDocument = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            username: req.body.username,
            password: hashedPassword,
        };

        let collection = await db.collection("users");
        let result = await collection.insertOne(newDocument);
        const token = createSecretToken(result.insertedId);
        res.cookie("auth-token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        return res.status(203).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
};

export const getUsers = async (req, res) => {

    let collection = await db.collection("users");
    let query = {};
    if (req.query.email) {
        query = { email: req.query.email };
    } else if (req.query.id) {
        query = { _id: new ObjectId(req.query.id) };
    } else {
        return await collection.find({}).toArray();
    }
    let results = await collection.findOne(query);

    if (!results) return res.status(404).json({ message: "Not found" });
    res.send(results).status(200);
}