import { ClosingTimeItemProps } from "./types";
import clock from "../../../images/clock.svg";
import { DateTime } from "luxon";

export const ClosingTimeItem = ({ closingDate }: ClosingTimeItemProps) => {
  const formatClosingDate = () => {
    const now = DateTime.now();
    const endDate = new Date(closingDate);
    if (endDate === undefined || endDate === null || isNaN(endDate.getTime()))
      return "?";

    const diff = DateTime.fromJSDate(endDate).diff(now, "days").toObject().days;
    if (diff === undefined || diff === null) return "?";

    //Active giftcards
    if (diff >= 0) {
      if (diff < 7) {
        const days = Math.round(diff) === 1 ? "jour" : "jours";
        return "Se clôture dans " + Math.round(diff) + " " + days;
      }
      if (diff < 30) {
        const weeks = Math.round(diff / 7) === 1 ? "semaine" : "semaines";
        return "Se clôture dans " + Math.round(diff / 7) + " " + weeks;
      }
      if (diff < 365) {
        return "Se clôture dans " + Math.round(diff / 30) + " mois";
      }
      if (diff >= 365) {
        const years = Math.round(diff / 365) === 1 ? "an" : "ans";
        return "Se clôture dans " + Math.round(diff / 365) + " " + years;
      }
    } else {
      //Expired giftcards
      if (diff > -7) {
        const days = Math.round(diff) === -1 ? "jour" : "jours";
        return "Clôturée il y a " + Math.round(diff / -1) + " " + days;
      }
      if (diff > -30) {
        const weeks = Math.round(diff / -7) === 1 ? "semaine" : "semaines";
        return "Clôturée il y a " + Math.round(diff / -7) + " " + weeks;
      }
      if (diff > -365) {
        return "Clôturée il y a " + Math.round(diff / -30) + " mois";
      }
      if (diff <= -365) {
        const years = Math.round(diff / -365) === 1 ? "an" : "ans";
        return "Clôturée il y a " + Math.round(diff / -365) + " " + years;
      }
    }
  };

  return (
    <div className="text-grey-500 flex items-center gap-1 text-sm">
      <img src={clock} alt="clock icon" />
      <p>{formatClosingDate()}</p>
    </div>
  );
};
