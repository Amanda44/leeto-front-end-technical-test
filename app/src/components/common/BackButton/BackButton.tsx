import { BackButtonProps } from "./types";
import arrowBack from "../../../images/arrow_back.svg";

export const BackButton = ({ onClick, label }: BackButtonProps) => {
  return (
    <div className="p-4 md:p-6">
      <div onClick={onClick} className="flex items-center cursor-pointer w-fit">
        <div className="sm:border-none border-[1px] border-grey-100 rounded-lg p-2">
          <img src={arrowBack} alt="go back button" />
        </div>
        <span className="sm:block text-blue-200 hidden font-medium text-sm">
          {label}
        </span>
      </div>
    </div>
  );
};
