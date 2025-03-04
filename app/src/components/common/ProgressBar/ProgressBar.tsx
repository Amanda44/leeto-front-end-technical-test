import { ProgressBarProps } from "./types";

export const ProgressBar = ({
  allowedAmount,
  consumedAmount,
}: ProgressBarProps) => {
  const percentage = () => {
    const percent = Math.round((consumedAmount / allowedAmount) * 100);
    return percent > 100 ? 100 : percent < 0 ? 0 : percent;
  };

  return (
    <div className="w-full flex items-center gap-2">
      <div className="h-1.5 w-full bg-grey-100 rounded-md">
        <div
          className="h-full bg-blue-200 rounded-md"
          style={{ width: `${percentage()}%` }}
        />
      </div>
      <p className="font-medium text-blue-700 text-xs">{percentage()}%</p>
    </div>
  );
};
