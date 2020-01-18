import { storeContext } from "@contexts";
import { useStores } from "@hooks/use-stores";
import Layout from "../components/_App/Layout";

let store;

function MyApp({ Component, pageProps, initialStoreData }) {
  const { userStore, counterStore, themeStore } = useStores();

  store = {
    userStore,
    counterStore,
    themeStore
  };

  return (
    <storeContext.Provider value={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} userStore={userStore} />
      </Layout>
    </storeContext.Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  // Provide the store to getInitialProps of pages
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ...ctx, store });
  }

  return {
    pageProps,
    store
  };
};

export default MyApp;
