import { useStores } from "@hooks/use-stores";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { Container, Icon, Image, Menu } from "semantic-ui-react";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = observer(() => {
  const { userStore } = useStores();
  console.log(userStore.user && userStore.user.name);
  const router = useRouter();
  const isRoot = userStore.user && userStore.user.role === "root";
  const isAdmin = userStore.user && userStore.user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;

  function isActive(route) {
    return route === router.pathname;
  }

  function handleLogout() {
    console.log("Handle Logout called");
    userStore.logout();
  }

  function handleLogin() {
    console.log("Handle login called");
    userStore.login();
  }

  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive("/")}>
            <Image size="mini" src="/logo.svg" style={{ marginRight: "1em" }} />
            Sekularac Art Shop
          </Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item header active={isActive("/cart")}>
            <Icon name="cart" size="large" />
            Cart
          </Menu.Item>
        </Link>

        {isRootOrAdmin && (
          <Link href="/create">
            <Menu.Item header active={isActive("/create")}>
              <Icon name="add square" size="large" />
              Create
            </Menu.Item>
          </Link>
        )}

        {userStore.user ? (
          <>
            <Link href="/account">
              <Menu.Item header active={isActive("/account")}>
                <Icon name="user" size="large" />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item onClick={handleLogout} header>
              <Icon name="sign out" size="large" />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item header onClick={handleLogin}>
              <Icon name="sign in" size="large" />
              Login
            </Menu.Item>

            <Link href="/signup">
              <Menu.Item header active={isActive("/signup")}>
                <Icon name="signup" size="large" />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
});

export default Header;
