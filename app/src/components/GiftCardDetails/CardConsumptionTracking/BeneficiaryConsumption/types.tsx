import { Beneficiary } from "../../types/Beneficiary";

export type BeneficiaryConsumptionProps = {
  allowedAmount: Beneficiary["consumption"]["allowedAmount"];
  consumedAmount: Beneficiary["consumption"]["consumedAmount"];
  firstName: Beneficiary["firstName"];
  type: Beneficiary["type"];
};
