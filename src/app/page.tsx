"use client";

import LectureGroup from "@/components/lecture/LectureGroup";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Menu />
        <Banner />
        <LectureGroup />
      </div>
    </QueryClientProvider>
  );
}
