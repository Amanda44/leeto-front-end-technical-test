import { CardGiftCard } from "../../components/CardGiftCard";
import { useMemo, useState } from "react";
import { useGetActiveGiftCards } from "../../hooks/GiftCardsList/ActiveGiftCards/useGetActiveGiftCards";
import { useGetArchivedGiftCards } from "../../hooks/GiftCardsList/ArchivedGiftcards/useGetArchivedGiftCards";

export const GiftCardsList = () => {
  const { data: activeGiftCards, isLoading: isActiveGiftCardsLoading } =
    useGetActiveGiftCards();
  const { data: archivedGiftCards, isLoading: isArchivedGiftCardsLoading } =
    useGetArchivedGiftCards();

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = useMemo(
    () => [
      { name: "Actives", state: "active" },
      { name: "Clôturées", state: "archived" },
    ],
    []
  );

  const onPressTab = (index: number) => {
    setSelectedTab(index);
  };

  const selectedGiftCards = useMemo(() => {
    if (tabs[selectedTab].state === "active") {
      return activeGiftCards;
    } else if (tabs[selectedTab].state === "archived") {
      return archivedGiftCards;
    }
  }, [activeGiftCards, archivedGiftCards, selectedTab, tabs]);

  /* TODO: make a prettier loader */
  if (isActiveGiftCardsLoading || isArchivedGiftCardsLoading) {
    return <div>Loading...</div>;
  }
  /* TODO: manage empty state */
  return (
    <div className="h-full w-fullf flex flex-col p-10 font-inter gap-6">
      <h1 className="sm:text-2xl text-xl font-semibold text-blue-600">
        Cartes cadeaux
      </h1>
      {/* tabs */}
      <div className="w-full flex border-b-[1px] border-b-grey-100 ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex px-4 py-2 cursor-pointer ${
              selectedTab === index
                ? "text-blue-200 border-b-2 border-b-blue-200"
                : ""
            }`}
            onClick={() => onPressTab(index)}
          >
            <span className="text-sm font-semibold">
              {tab.name}{" "}
              {tab.state === "active"
                ? `(${activeGiftCards?.length})`
                : `(${archivedGiftCards?.length})`}
            </span>
          </div>
        ))}
      </div>
      {/* giftcards list */}
      <div className="flex flex-wrap gap-4">
        {selectedGiftCards?.map((giftCard) => (
          <div className=" w-80" key={giftCard.id}>
            <CardGiftCard
              allowedAmount={giftCard.allowedAmount}
              consumedAmount={giftCard.consumedAmount}
              closingDate={giftCard.closingDate}
              name={giftCard.name}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
