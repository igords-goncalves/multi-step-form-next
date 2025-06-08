import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
};

export default Layout;
