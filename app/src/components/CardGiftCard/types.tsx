import { GiftCard } from "../../types/GiftCard";

export type CardGiftCardProps = {
  id: GiftCard["id"];
  closingDate: GiftCard["closingDate"];
  name: GiftCard["name"];
  allowedAmount: GiftCard["allowedAmount"];
  consumedAmount: GiftCard["consumedAmount"];
};
