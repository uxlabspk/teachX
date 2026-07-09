import { type ReactNode } from "react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  role: "teacher" | "student";
  children: ReactNode;
}

const DashboardLayout = ({ role, children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role={role} />
      <main className="lg:ml-56">
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
