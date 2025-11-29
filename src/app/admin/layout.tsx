import { getCurrentUser } from "@/lib/supabase/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
