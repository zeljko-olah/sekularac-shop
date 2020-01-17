import Layout from "../components/_App/Layout";
import { initializeData, InjectStoreContext } from "../store";

function MyMobxApp({ Component, pageProps, initialStoreData }) {
  return (
    <InjectStoreContext initialData={initialStoreData}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </InjectStoreContext>
  );
}

MyMobxApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const initialStoreData = initializeData();

  // Provide the store to getInitialProps of pages
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ...ctx, initialStoreData });
  }

  return {
    pageProps,
    initialStoreData
  };
};

export default MyMobxApp;
