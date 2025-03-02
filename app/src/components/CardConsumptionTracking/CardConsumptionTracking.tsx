import budget from "../../assets/budget.svg";
import { Beneficiary } from "../../types/Beneficiary";
import { BeneficiaryConsumption } from "../BeneficiaryConsumption";

export const CardConsumptionTracking = ({
  beneficiaries,
}: {
  beneficiaries: Beneficiary[];
}) => {
  return (
    <div className="h-full w-full border-[1px] border-grey-100 rounded-lg p-4 md:p-6 m-2">
      <div className="bg-green-50 w-10 h-10 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4">
        <img src={budget} alt="budget icon" width={24} height={24} />
      </div>
      <span className="font-medium text-blue-700">Suivi de consommation</span>
      <div className="flex flex-wrap items-center">
        {beneficiaries.map((beneficiary) => (
          <div
            key={beneficiary.id}
            style={{
              width: `${
                beneficiary.type === "user" || beneficiaries.length === 1
                  ? 100
                  : 50
              }%`,
            }}
          >
            <BeneficiaryConsumption
              allowedAmount={beneficiary.consumption.allowedAmount}
              consumedAmount={beneficiary.consumption.consumedAmount}
              firstName={beneficiary.firstName}
              type={beneficiary.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
