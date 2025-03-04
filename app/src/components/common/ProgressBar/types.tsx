import { GiftCard } from "../../../types/GiftCard";

export type ProgressBarProps = {
  allowedAmount: GiftCard["allowedAmount"];
  consumedAmount: GiftCard["consumedAmount"];
};
