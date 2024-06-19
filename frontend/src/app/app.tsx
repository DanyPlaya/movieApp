import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter()} />
    </QueryClientProvider>
  );
};
