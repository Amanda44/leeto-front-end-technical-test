import { Beneficiary } from "../../types/Beneficiary";

export type ProgressBarProps = {
  viewType: "list" | "details";
  beneficiary: Beneficiary;
};
