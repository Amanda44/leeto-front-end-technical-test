import { Beneficiary } from "../../../types/Beneficiary";

export const BeneficiaryIcon = ({ type }: { type: Beneficiary["type"] }) => {
  const getBeneficiaryIcon = () => {
    switch (type) {
      case "user":
        return "🙋‍♂️";
      case "companion":
        return "💙";
      case "child":
        return "👶";
      default:
        return "?";
    }
  };

  return (
    <div
      data-testid={`icon-${type}`}
      className="bg-grey-50 border-2 border-white w-8 h-8 rounded-full flex items-center justify-center"
    >
      {getBeneficiaryIcon()}
    </div>
  );
};
