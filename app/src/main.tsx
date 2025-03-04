import ReactDOM from "react-dom/client";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GiftCardsList } from "./pages/GiftCardsList/GiftCardsList";
import { GiftCardDetails } from "./pages/GiftCardDetails/GiftCardDetails";

const root = document.getElementById("root");
const queryClient = new QueryClient();

if (root) {
  ReactDOM.createRoot(root).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/giftcards" element={<GiftCardsList />} />
          <Route path="/giftcard/:id" element={<GiftCardDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
} else {
  console.error("Root element not found");
}
