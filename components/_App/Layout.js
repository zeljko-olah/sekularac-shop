import Head from "next/head";
import { Container } from "semantic-ui-react";
import HeadContent from "./HeadContent";
import Header from "./Header";
import "./Layout.css";

function Layout({ user, children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>Sekularac Art Shop</title>
      </Head>
      <Header user={user} />
      <Container className="Layout__Container" text>
        {children}
      </Container>
    </>
  );
}

export default Layout;
