import { Header } from "@/app/components/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header className={"my-8"} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
