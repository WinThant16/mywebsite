import { ReactNode } from "react";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-200 text-gray-100">
      <Navbar />
      {/* Give enough padding to avoid overlap with fixed navbar */}
      <main className="flex-1 px-4 pt-24">{children}</main>
    </div>
  );
};

export default DefaultLayout;
