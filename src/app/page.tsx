"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/auth-provider";
import { MainLayout } from "@/components/layout/main-layout";
import { DashboardContent } from "@/components/dashboard/dashboard-content";
import { LoadingSpinner } from "@/components/shared/loading-spinner";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <MainLayout>
      <DashboardContent />
    </MainLayout>
  );
}