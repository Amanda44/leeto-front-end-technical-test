import { formatBeneficiaryName } from "../../utils/beneficiaries/formatBeneficiaryName";
import { BeneficiaryIcon } from "../common/BeneficiaryIcon/BeneficiaryIcon";
import { ProgressBarProps } from "./types";

export const ProgressBar = ({ viewType, beneficiary }: ProgressBarProps) => {
  // Simple variables
  const { firstName, type, consumption } = beneficiary;
  const { allowedAmount, consumedAmount } = consumption;
  const formattedName = formatBeneficiaryName({
    type,
    firstName,
  });

  // Simple functions
  const percentage = () => {
    const percent = Math.round((consumedAmount / allowedAmount) * 100);
    return percent > 100 ? 100 : percent < 0 ? 0 : percent;
  };

  return (
    <div className="w-full flex items-center gap-2 text-xs">
      {/* beneficiary icon */}
      {viewType === "details" && <BeneficiaryIcon type={type} />}
      <div className="w-full">
        {/* label */}
        {viewType === "details" && (
          <div className="text-grey-500">
            {formattedName} • {consumedAmount} € / {allowedAmount} €
          </div>
        )}
        {viewType === "list" && (
          <div className="text-grey-500">
            {consumedAmount} € dépensé{consumedAmount > 1 ? "s" : ""} /{" "}
            {allowedAmount} €
          </div>
        )}
        {/* progressbar */}
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-full bg-grey-100 rounded-md">
            <div
              className="h-full bg-blue-200 rounded-md"
              style={{ width: `${percentage()}%` }}
            />
          </div>
          <p className="font-medium text-blue-700">{percentage()}%</p>
        </div>
      </div>
    </div>
  );
};
