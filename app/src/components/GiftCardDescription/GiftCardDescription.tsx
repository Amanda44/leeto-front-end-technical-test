import { GiftCardDescriptionProps } from "./types";

export const GiftCardDescription = ({
  description,
}: GiftCardDescriptionProps) => {
  return (
    <div className="bg-grey-150 text-blue-700 rounded-lg p-4 gap-2 ">
      <p className="text-semibold text-sm">Description de la carte-cadeau</p>
      <p>{description}</p>
    </div>
  );
};
