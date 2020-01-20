// must restart server whenever you make changes in next.config

const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  env: {
    MONGO_SRV: "mongodb://localhost:27017/sekularac",
    JWT_SECRET: "hello_world",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/zeljkoolah/image/upload",
    STRIPE_SECRET_KEY: "sk_test_Wl6Xhen4oTl6sSo4AlSOtpwH00oye58ZT4"
  }
});
