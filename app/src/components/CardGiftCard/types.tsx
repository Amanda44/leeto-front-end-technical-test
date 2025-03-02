import { GiftCard } from "../../types/GiftCard";

export type CardGiftCardProps = {
  closingDate: GiftCard["closingDate"];
  name: GiftCard["name"];
  allowedAmount: GiftCard["allowedAmount"];
  consumedAmount: GiftCard["consumedAmount"];
  onClick: () => void;
};
