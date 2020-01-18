// function Account({ user, orders }) {
//   return (
//     <>
//       <AccountHeader {...user} />
//       <AccountOrders orders={orders} />
//       {user.role === "root" && <AccountPermissions />}
//     </>
//   );
// }

function Account({ user, orders }) {
  return (
    <>
      <h1>Account Page</h1>
    </>
  );
}

// Account.getInitialProps = async ctx => {
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

export default Account;
