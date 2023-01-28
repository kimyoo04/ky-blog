import Sidebar from "@layouts/SideBar/SideBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />

      {children}
    </div>
  );
}
