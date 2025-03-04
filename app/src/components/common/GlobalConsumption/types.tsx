import { GiftCard } from "../../../types/GiftCard";

export type GlobalConsumptionProps = {
  allowedAmount: GiftCard["allowedAmount"];
  consumedAmount: GiftCard["consumedAmount"];
};
