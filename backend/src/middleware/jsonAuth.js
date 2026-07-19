import jwt from "jsonwebtoken";

const getCookie = (req, name) => {
    const cookie = req.headers.cookie
        ?.split(";")
        .map((value) => value.trim())
        .find((value) => value.startsWith(`${name}=`));

    return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
};

const authenticateToken= function(req, res, next){
    try {
        const authHeader = req.headers["authorization"];
        const bearerToken = authHeader?.startsWith("Bearer ")
            ? authHeader.slice(7)
            : null;
        const token = getCookie(req, "admin_access_token") || bearerToken;

        if (!token){
            return res.status(401).json({message: "Unauthorized user."});
        }

        const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verifiedToken;
        next();
    } catch (error) {
        return res.status(403).json({message:"Invalid or expired access token."});
    }
}
export default authenticateToken;
