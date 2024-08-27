import jwt from "jsonwebtoken";

let createSecretToken = (id, expiration = 900000) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: expiration,
    });
};

export default createSecretToken;