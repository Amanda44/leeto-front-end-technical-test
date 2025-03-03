import { useNavigate, useParams } from "react-router";
import { GiftCardDetails as GiftCardDetailsComponent } from "../../components/GiftCardDetails";
import { useGetGiftCardDetails } from "../../hooks/GiftCardDetails/useGetGiftCardDetails";
import { BackButton } from "../../components/common/BackButton";
import { Loader } from "../../components/common/Loader";
import { Empty } from "../../components/common/Empty";

export const GiftCardDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetGiftCardDetails(id ? id : "");

  const onPressGoBack = () => {
    navigate(-1);
  };

  // loading
  if (isLoading) {
    return <Loader />;
  }
  // empty
  if (!data) {
    return (
      <Empty label="Il semblerait que votre carte cadeau n'est pas disponible, réessayez plus tard. 👀" />
    );
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
