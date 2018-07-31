const url = process.env.API_URL;

module.exports = {
    connectionString: process.env.CONNECTION_STRING,
    allowedOrigins: url ? [ url ] : [],
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 3000
};