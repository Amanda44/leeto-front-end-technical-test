import { formatBeneficiaryNameProps } from "./types";

export const formatBeneficiaryName = ({
  type,
  firstName,
}: formatBeneficiaryNameProps) => {
  return type === "user" ? "Vous-même" : firstName;
};
