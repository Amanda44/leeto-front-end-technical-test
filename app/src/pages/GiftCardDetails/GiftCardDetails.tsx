import { useNavigate, useParams } from "react-router";
import { GiftCardDetails as GiftCardDetailsComponent } from "../../components/GiftCardDetails";
import { useGetGiftCardDetails } from "../../hooks/GiftCardDetails/useGetGiftCardDetails";
import { BackButton } from "../../components/common/BackButton";
import { Loader } from "../../components/common/Loader";

export const GiftCardDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetGiftCardDetails(id ? id : "");
  const navigate = useNavigate();

  const onPressGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loader />;
  }
  /* TODO: manage empty state */
  if (!data) {
    return <div>Empty</div>;
  }
  return (
    <div className="h-full w-fullf flex flex-col font-inter gap-4">
      <BackButton
        label="Retour vers les cartes cadeaux"
        onClick={onPressGoBack}
      />
      <GiftCardDetailsComponent
        id={data.id}
        description={data.description}
        name={data.name}
        openingDate={data.openingDate}
        closingDate={data.closingDate}
        state={data.state}
        allowedAmount={data.allowedAmount}
        consumedAmount={data.consumedAmount}
        beneficiaries={data.beneficiaries}
      />
    </div>
  );
};
