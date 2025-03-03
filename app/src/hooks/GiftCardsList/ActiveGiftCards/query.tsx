import { GiftCard } from "../../../types/GiftCard";

export const getActiveGiftCards = async (): Promise<GiftCard[]> => {
  /* TODO: better managing of errors */
  const response = await fetch(`http://localhost:3001/gift-cards?state=active`);
  const data = await response.json();
  if (response.status !== 200) {
    throw data;
  }
  return data;
};
