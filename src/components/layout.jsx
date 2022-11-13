import * as React from 'react';

function Layout({ children }) {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
