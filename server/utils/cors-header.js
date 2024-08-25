const setCorsHeader = (req, res, next) => {
    try {
        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.set({ 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE' });
        res.set({ 'Access-Control-Allow-Headers': 'Content-Type, Authorization' });
        next();
    }
    catch (error) {
        console.log(error);
    }
};

export default setCorsHeader;