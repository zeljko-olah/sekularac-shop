import { Provider } from "mobx-react";
import App from "next/app";
import React from "react";
import Layout from "../components/_App/Layout";
import { fetchInitialStoreState, Store } from "../store";

class MyMobxApp extends App {
  state = {
    store: new Store()
  };

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props, state) {
    state.store.hydrate(props.initialStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={this.state.store}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}
export default MyMobxApp;
