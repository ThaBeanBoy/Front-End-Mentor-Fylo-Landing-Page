import React from "react";

import TopAndNavigation from "./layoutComponents/TopAndNavigation";
import Footer from "./layoutComponents/Footer";

function Layout({ children }) {
  return (
    <div id="App" className="min-h-screen w-screen">
      <TopAndNavigation />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
