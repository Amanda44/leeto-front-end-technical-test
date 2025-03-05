import { Beneficiary } from "../../../../types/Beneficiary";
import { formatBeneficiaryName } from "../../../../utils/beneficiaries/formatBeneficiaryName";
import { BeneficiaryIcon } from "../../../common/BeneficiaryIcon";

export const BeneficiariesList = ({
  beneficiaries,
}: {
  beneficiaries: Beneficiary[];
}) => {
  return (
    <div
      data-testid="beneficiaries-list"
      className="w-full flex items-center mt-2 gap-2 text-sm text-grey-500"
    >
      {/* beneficiaries icons */}
      <div className="flex">
        {beneficiaries.map((beneficiary, index) => {
          return (
            <div className="-m-1" key={index}>
              <BeneficiaryIcon type={beneficiary.type} />
            </div>
          );
        })}
      </div>
      {/* beneficiaries names */}
      <div>
        {beneficiaries.length === 1 ? (
          <p>
            {formatBeneficiaryName({
              type: beneficiaries[0].type,
              firstName: beneficiaries[0].firstName,
            })}
            {beneficiaries[0].type === "user"
              ? " êtes éligible."
              : " est éligible."}
          </p>
        ) : (
          <div className="flex flex-wrap">
            {beneficiaries.map((beneficiary, index) => {
              return (
                <span className="mr-1" key={index}>
                  {formatBeneficiaryName({
                    type: beneficiary.type,
                    firstName: beneficiary.firstName,
                  })}
                  {index + 1 === beneficiaries.length - 1 && " et"}
                  {index + 1 !== beneficiaries.length &&
                    index + 1 !== beneficiaries.length - 1 &&
                    ","}
                </span>
              );
            })}
            <span>sont éligibles.</span>
          </div>
        )}
      </div>
    </div>
  );
};
