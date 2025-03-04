import { useQuery } from "@tanstack/react-query";
import { getGiftCardDetails } from "../../requests/GiftCardDetails/getGiftCardDetails";

export const useGetGiftCardDetails = (id: string) => {
  return useQuery({
    queryKey: ["giftcard_details_" + id],
    queryFn: () => getGiftCardDetails(id),
  });
};
