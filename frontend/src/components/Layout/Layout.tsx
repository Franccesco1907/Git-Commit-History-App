import React from "react";
import Header from "../../design-system/components/Header/Header";
import github_logo from '../../assets/github_logo_white.png'

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Header
          image={github_logo}
          title="Github Commit History App"
        />
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;