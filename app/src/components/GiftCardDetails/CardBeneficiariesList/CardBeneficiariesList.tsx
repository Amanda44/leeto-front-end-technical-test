import family from "../../../images/family.svg";
import { Beneficiary } from "../../../types/Beneficiary";
import { BeneficiariesList } from "./BeneficiariesList";

export const CardBeneficiariesList = ({
  beneficiaries,
}: {
  beneficiaries: Beneficiary[];
}) => {
  return (
    <div className="h-full w-full border-[1px] border-grey-100 rounded-lg p-4 md:p-6">
      <div className="bg-green-50 w-10 h-10 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4">
        <img src={family} alt="family icon" width={24} height={24} />
      </div>
      <span className="font-medium text-blue-700">
        Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?
      </span>
      <BeneficiariesList beneficiaries={beneficiaries} />
    </div>
  );
};
