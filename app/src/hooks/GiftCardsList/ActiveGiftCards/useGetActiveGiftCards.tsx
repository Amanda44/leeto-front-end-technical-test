import { useQuery } from "@tanstack/react-query";
import { getActiveGiftCards } from "../../../requests/GiftCardsList/ActiveGiftCards/getActiveGiftCards";

export const useGetActiveGiftCards = () => {
  return useQuery({
    queryKey: ["giftcards_active"],
    queryFn: getActiveGiftCards,
  });
};
