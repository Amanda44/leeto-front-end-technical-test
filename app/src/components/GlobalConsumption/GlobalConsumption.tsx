import { ProgressBar } from "../ProgressBar";
import { GlobalConsumptionProps } from "./types";

export const GlobalConsumption = ({
  allowedAmount,
  consumedAmount,
}: GlobalConsumptionProps) => {
  return (
    <div>
      <div className="text-grey-500 text-xs">
        {consumedAmount} € dépensé{consumedAmount > 1 ? "s" : ""} /{" "}
        {allowedAmount} €
      </div>
      <ProgressBar
        allowedAmount={allowedAmount}
        consumedAmount={consumedAmount}
      />
    </div>
  );
};
