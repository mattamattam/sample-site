import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <div className="title">Fabulous Test Store</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
