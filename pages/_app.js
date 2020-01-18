import Layout from "@components/_App/Layout";
import { storeContext } from "@contexts";
import { useStores } from "@hooks/use-stores";
import { redirectUser } from "@utils/auth";
import baseUrl from "@utils/baseUrl";
import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";

let store;
const isBrowser = process.browser;

function MyApp({ Component, pageProps }) {
  const { userStore, counterStore, themeStore } = useStores();

  store = {
    userStore,
    counterStore,
    themeStore
  };

  if (isBrowser) window._____APP_STATE_____ = store;

  return (
    <storeContext.Provider value={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} store={store} />
      </Layout>
    </storeContext.Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!token) {
    const isProtectedRoute =
      ctx.pathname === "/account" ||
      ctx.pathname === "/create" ||
      ctx.pathname === "/cart";
    if (isProtectedRoute) {
      redirectUser(ctx, "/login");
    }
  } else {
    try {
      const payload = { headers: { Authorization: token } };
      const url = `${baseUrl}/api/account`;
      const response = await axios.get(url, payload);
      const user = response.data;
      const isRoot = user.role === "root";
      const isAdmin = user.role === "admin";
      // if authenticated, but not of role 'admin' or 'root', redirect from '/create' page
      const isNotPermitted = !(isRoot || isAdmin) && ctx.pathname === "/create";
      if (isNotPermitted) {
        redirectUser(ctx, "/");
      }
      pageProps.user = user;
    } catch (error) {
      console.error("Error getting current user", error);
      // 1) Throw out invalid token
      destroyCookie(ctx, "token");
      // 2) Redirect to login
      redirectUser(ctx, "/login");
    }
  }

  return { pageProps };
};

export default MyApp;
