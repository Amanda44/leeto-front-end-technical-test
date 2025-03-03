import { useQuery } from "@tanstack/react-query";
import { getActiveGiftCards } from "./query";

export const useGetActiveGiftCards = () => {
  return useQuery({
    queryKey: ["giftcards_active"],
    queryFn: getActiveGiftCards,
  });
};
