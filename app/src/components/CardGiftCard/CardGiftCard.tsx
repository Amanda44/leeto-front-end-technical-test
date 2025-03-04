import { Link } from "react-router";
import giftcard from "../../images/giftcard.svg";
import { CardGiftCardProps } from "./types";
import { ClosingTimeItem } from "../common/ClosingTimeItem";
import { GlobalConsumption } from "../common/GlobalConsumption";

export const CardGiftCard = ({
  id,
  closingDate,
  name,
  allowedAmount,
  consumedAmount,
}: CardGiftCardProps) => {
  return (
    <Link to={`/giftcard/${id}`}>
      <div className="h-full w-full flex flex-col gap-2 border-[1px] border-grey-100 rounded-lg p-4 md:p-6 m-2 cursor-pointer">
        <div className="bg-pink-50 w-8 h-8 rounded-lg flex items-center justify-center mb-4">
          <img src={giftcard} alt="giftcard icon" width={16} height={16} />
        </div>
        <ClosingTimeItem closingDate={closingDate} />
        <span className="font-medium text-blue-700">{name}</span>
        <GlobalConsumption
          allowedAmount={allowedAmount}
          consumedAmount={consumedAmount}
        />
      </div>
    </Link>
  );
};
