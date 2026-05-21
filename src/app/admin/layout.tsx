import AdminNav from "@/components/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ background: "#07111D" }}>
      <AdminNav />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
