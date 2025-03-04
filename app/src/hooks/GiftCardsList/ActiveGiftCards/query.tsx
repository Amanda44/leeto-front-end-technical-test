import { GiftCard } from "../../../types/GiftCard";

export const getActiveGiftCards = async (): Promise<GiftCard[]> => {
  try {
    const response = await fetch(
      `http://localhost:3001/gift-cards?state=active`
    );
    const data = await response.json();
    if (response.status !== 200 || !response.ok) {
      console.error(
        "Erreur: Impossible de récupérer les cartes cadeaux actives"
      );
      throw new Error(
        "Erreur: Impossible de récupérer les cartes cadeaux actives"
      );
    }
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error("Erreur: " + e.message);
      throw new Error("Erreur: " + e.message);
    } else {
      console.error(
        "Erreur: Impossible de récupérer les cartes cadeaux actives"
      );
      throw new Error(
        "Erreur: Impossible de récupérer les cartes cadeaux actives"
      );
    }
  }
};
