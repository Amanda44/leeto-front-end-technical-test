import { GiftCard } from "../../types/GiftCard";
import giftcard from "../../assets/giftcard.svg";
import { ValidityTimeItem } from "../ValidityTimeItem";
import { ClosingTimeItem } from "../ClosingTimeItem";
import { GiftCardDescription } from "../GiftCardDescription";
import { CardBeneficiariesList } from "../CardBeneficiariesList";
import { CardConsumptionTracking } from "../CardConsumptionTracking";
import { ProgressBar } from "../ProgressBar";

export const GiftCardDetails = ({
  name,
  openingDate,
  closingDate,
  allowedAmount,
  consumedAmount,
  description,
  beneficiaries,
}: GiftCard) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 md:p-6">
      {/* Icon */}
      <div className="bg-pink-50 w-10 h-10  sm:w-16 sm:h-16 rounded-lg flex items-center justify-center">
        <img src={giftcard} alt="giftcard icon" width={24} height={24} />
      </div>
      {/* Name */}
      <h1 className="sm:text-2xl text-xl font-semibold text-blue-600">
        {name}
      </h1>
      {/* Time items */}
      <div className="flex gap-4 flex-wrap">
        <ValidityTimeItem openingDate={openingDate} closingDate={closingDate} />
        <ClosingTimeItem closingDate={closingDate} />
      </div>
      {/* Budget items */}
      <div className="flex items-end gap-4">
        <div className="flex flex-col text-blue-700">
          <span className="sm:text-2xl text-xl font-semibold">
            {consumedAmount} €
          </span>
          <span className="sm:text-sm text-xs font-medium">
            {consumedAmount === 1 ? "disponible" : "disponibles"}
          </span>
        </div>
        <div className="w-1/3">
          <ProgressBar
            allowedAmount={allowedAmount}
            consumedAmount={consumedAmount}
          />
        </div>
      </div>
      {/* Description */}
      <GiftCardDescription description={description} />
      {/* Beneficiaries items */}
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
        <div className="md:w-1/2 w-full">
          <CardBeneficiariesList beneficiaries={beneficiaries} />
        </div>
        <div className="md:w-1/2 w-full">
          <CardConsumptionTracking beneficiaries={beneficiaries} />
        </div>
      </div>
    </div>
  );
};
