import { dbUser } from "../db/connection.js";
import createSecretToken from "../utils/token.js";
import bcrypt from "bcrypt";

export const login = async (req, res, next) => {
    try {
        const { email, password, rememberMe } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        let collection = await db.collection("regular");

        const user = await collection.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Incorrect password or email' });
        }
        bcrypt.compare(password, user.password, (err, data) => {
            if (err) throw err;

            if (data) {
                const expiration = rememberMe ? 3 * 24 * 60 * 60 * 1000 : 15 * 60 * 1000;
                const token = createSecretToken(user._id, expiration);
                res.cookie("auth-token", token, {
                    withCredentials: true,
                    httpOnly: true,
                    secure: true,
                    maxAge: expiration,

                });
                res.status(201).json({ message: "User logged in successfully", success: true });
                next()
            } else {
                return res.status(400).json({ message: 'Incorrect password or email' });
            }
        });


    } catch (error) {
        console.error(error);
    }
}


export const logout = (req, res, next) => {
    try {
        res.clearCookie("auth-token");
        return res.status(200).send({ message: "Succesfully logged out" });
    } catch (error) {
        console.log(error);
    }
}