import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container>
        <br />
        {children}
      </Container>
    </div>
  );
}

export default Layout;
