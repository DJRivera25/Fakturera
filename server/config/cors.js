const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    const allowedOrigins = ["http://localhost:3000", process.env.FRONTEND_URL].filter(Boolean);

    const isAllowed = allowedOrigins.some((allowedOrigin) => {
      if (allowedOrigin.includes("*")) {
        const domain = allowedOrigin.replace("*", "");
        return origin.includes(domain);
      }
      return origin === allowedOrigin;
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      console.log("CORS blocked origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
  exposedHeaders: ["Content-Length", "X-Requested-With"],
  maxAge: 86400,
};

module.exports = corsOptions;
