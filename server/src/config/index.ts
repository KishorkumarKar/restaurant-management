const config = {
    port: process.env.PORT || 2005,
    saltRound: Number(process.env.SALT_ROUND) || 10,
    db_connection: process.env.CONNECTION_STRING || "",
    rabbit_mq_host: process.env.RABBIT_MQ_HOST || "",
    jwtSecret: String(process.env.JWT_SECRET) || "secret",
    // jwtExpiryTime: (process.env.JWT_EXPIRY || (60*20)) as number,   // as per second
    jwtExpiryTime: ((60 * 20)) as number,   // as per second
    exchange: process.env.RABBIT_MQ_EXCHANGE_BOOK || "hotel_booked",
    version: "V1",
    route: {
        auth: "auth", // for login logout and register
    },
    email: {
        host: (process.env.EMAIL_HOST || "in-v3.mailjet.com") as string,
        port: (process.env.EMAIL_PORT || 587) as number,
        user: (process.env.EMAIL_USER || "in-v3.mailjet.com") as string,
        pass: (process.env.EMAIL_PASS || "in-v3.mailjet.com") as string,
        disable_Email: true,
        fromEmail: process.env.FROM_EMAIL as string,
    },
    frontendUrl: "http://localhost:5001",
    allowedMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

export default config;