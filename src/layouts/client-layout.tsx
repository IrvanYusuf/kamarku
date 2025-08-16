import Footer from "@/components/client/footer";
import Header from "@/components/client/header";
import { ReactNode } from "react";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div>
      <Header />
      <main className="py-24">{children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
