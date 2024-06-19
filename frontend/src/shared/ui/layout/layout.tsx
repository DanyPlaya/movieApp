import { Outlet } from "react-router-dom";

type LayoutProps = {
  headerSlot: React.ReactNode;
  footerSlot: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { footerSlot, headerSlot } = props;
  return (
    <div className="flex flex-col min-h-screen">
      {headerSlot}
      <div className="flex-grow">
        <Outlet />
      </div>
      {footerSlot}
    </div>
  );
};
