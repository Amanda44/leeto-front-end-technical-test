import { Beneficiary } from "./Beneficiary";

export type GiftCard = {
  id: number;
  description: string;
  name: string;
  openingDate: string;
  closingDate: string;
  state: "active" | "archived";
  allowedAmount: number;
  consumedAmount: number;
  beneficiaries: Beneficiary[];
};
