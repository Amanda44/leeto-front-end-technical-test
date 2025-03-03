import { useQuery } from "@tanstack/react-query";
import { getArchivedGiftCards } from "./query";

export const useGetArchivedGiftCards = () => {
  return useQuery({
    queryKey: ["giftcards_archived"],
    queryFn: getArchivedGiftCards,
  });
};
