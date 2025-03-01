import { CardItemProps } from "./types";

export const CardItem = ({ item }: CardItemProps) => {
  return (
    <div className="border-[1px] border-grey-100 rounded-lg p-4 md:p-6 gap-4 ">
      {item}
    </div>
  );
};
