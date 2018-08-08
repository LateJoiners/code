const url = process.env.FRONT_END_URL;

module.exports = {
    connectionString: process.env.CONNECTION_STRING,
    allowedOrigins: url ? [ url ] : ['localhost:4200'],
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 3000
};