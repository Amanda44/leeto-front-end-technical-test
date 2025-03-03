import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { GiftCardsList } from "./pages/GiftCardsList/GiftCardsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/App.css";

const root = document.getElementById("root");
const queryClient = new QueryClient();

if (root) {
  ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/giftcards" element={<GiftCardsList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
} else {
  console.error("Root element not found");
}
