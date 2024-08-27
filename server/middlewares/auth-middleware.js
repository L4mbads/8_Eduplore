import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

const userVerification = (req, res, next) => {
    const token = req.cookies["auth-token"];
    if (!token) {
        return res.status(401).json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.status(400).json({ status: false })
        } else {
            let collection = db.collection("regular");
            let query = { _id: new ObjectId(data.id) };
            const user = await collection.findOne(query);
            if (user) return res.status(200).json({ status: true, id: user._id })
            else return res.status(400).json({ status: false })
        }
    })
}

export default userVerification;