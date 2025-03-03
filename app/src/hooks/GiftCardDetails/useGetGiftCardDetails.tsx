import { useQuery } from "@tanstack/react-query";
import { getGiftCardDetails } from "./query";

export const useGetGiftCardDetails = (id: string) => {
  return useQuery({
    queryKey: ["giftcard_details_" + id],
    queryFn: () => getGiftCardDetails(id),
  });
};
