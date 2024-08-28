
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { dbUser } from "../db/connection.js";
import createSecretToken from "../utils/token.js";
export const insertUser = async (req, res) => {
    try {
        const response = await fetch(`http://localhost:5050/user-management/user?email=${req.body.email}`);

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

        let collection = await dbUser.collection("regular");
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


    let collection = await dbUser.collection("regular");

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

export const getUserById = async (req, res) => {
    try {
        let collection = await dbUser.collection("regular");
        try {
            let query = { _id: new ObjectId(req.params.id) };
            let result = await collection.findOne(query);

            if (!result) return res.send("User not found").status(404);
            else return res.send(result).status(200);
        } catch (error) {
            return res.status(404).json({ message: "User not found" })
        }

    } catch (error) {
        return res.status(500).json({ message: "Error getting user" })
    }
}

export const editUser = async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                username: req.body.username,
            },
        };

        let collection = await dbUser.collection("regular");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }

}
export const getMentors = async (req, res) => {

    let collection = await dbUser.collection("mentors");

    let results = await collection.find({}).toArray();

    if (!results) return res.status(404).json({ message: "Not found" });
    res.send(results).status(200);

}