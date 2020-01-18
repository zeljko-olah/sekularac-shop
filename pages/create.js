function Create({ user, orders }) {
  return (
    <>
      <h1>Create Page</h1>
    </>
  );
}

// Create.getInitialProps = async ctx => {
//   const { token } = parseCookies(ctx.req);
//   console.log("execute");
//   if (!token) {
//     return { orders: [] };
//   }
//   const payload = { headers: { Authorization: token } };
//   const url = `${baseUrl}/api/orders`;
//   const response = await axios.get(url, payload);
//   return response.data;
// };

export default Create;
