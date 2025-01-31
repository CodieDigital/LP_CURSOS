import { Footer } from "./footer";
import { Header } from "../../../LP/components/layout/header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header hasEnterbutton={false} />

      <main>{children}</main>

      <Footer />
    </>
  );
}
