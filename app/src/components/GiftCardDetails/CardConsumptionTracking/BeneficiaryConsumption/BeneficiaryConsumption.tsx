import { formatBeneficiaryName } from "../../../../utils/beneficiaries/formatBeneficiaryName";
import { BeneficiaryIcon } from "../../../common/BeneficiaryIcon";
import { ProgressBar } from "../../../common/ProgressBar";
import { BeneficiaryConsumptionProps } from "./types";

export const BeneficiaryConsumption = ({
  allowedAmount,
  consumedAmount,
  firstName,
  type,
}: BeneficiaryConsumptionProps) => {
  const formattedName = formatBeneficiaryName({
    type,
    firstName,
  });
  return (
    <div className="flex items-center gap-2 p-4">
      <BeneficiaryIcon type={type} />
      <div className="w-full">
        <div className="text-grey-500 text-xs">
          {formattedName} • {consumedAmount} € / {allowedAmount} €
        </div>
        <ProgressBar
          allowedAmount={allowedAmount}
          consumedAmount={consumedAmount}
        />
      </div>
    </div>
  );
};
