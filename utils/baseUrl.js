const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://sekularac-art-shop.now.sh"
    : "http://localhost:3000";

export default baseUrl;
