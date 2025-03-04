import { useQuery } from "@tanstack/react-query";
import { getArchivedGiftCards } from "../../../requests/GiftCardsList/ArchivedGiftCards/getArchivedGiftCards";

export const useGetArchivedGiftCards = () => {
  return useQuery({
    queryKey: ["giftcards_archived"],
    queryFn: getArchivedGiftCards,
  });
};
