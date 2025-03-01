import { Beneficiary } from "../../../types/Beneficiary";

export const BeneficiaryIcon = ({ type }: { type: Beneficiary["type"] }) => {
  // Simple functions
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
    <div className="bg-grey-50 w-8 h-8 rounded-full flex items-center justify-center">
      {getBeneficiaryIcon()}
    </div>
  );
};
