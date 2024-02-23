"use client";

import { MyContextProvider } from "@/components/MyContext";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }) {
  const queryClient = new QueryClient();

  return (
    <ClerkProvider
      appearance={{
        elements: {
          button: {
            color: "black",
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <MyContextProvider>{children}</MyContextProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
