import { ClosingTimeItemProps } from "./types";
import clock from "../../assets/clock.svg";
import { DateTime } from "luxon";

export const ClosingTimeItem = ({ closingDate }: ClosingTimeItemProps) => {
  const formatClosingDate = () => {
    const now = DateTime.now();
    const endDate = new Date(closingDate);
    if (endDate === undefined || endDate === null || isNaN(endDate.getTime()))
      return "?";

    const diff = DateTime.fromJSDate(endDate).diff(now, "days").toObject().days;
    if (diff === undefined || diff === null) return "?";

    if (diff < 0) {
      return "Clôturée";
    }
    if (diff < 7) {
      const days = Math.floor(diff) === 1 ? "jour" : "jours";
      return "Se clôture dans " + Math.floor(diff) + " " + days;
    }
    if (diff < 30) {
      const weeks = Math.floor(diff / 7) === 1 ? "semaine" : "semaines";
      return "Se clôture dans " + Math.floor(diff / 7) + " " + weeks;
    }
    if (diff < 365) {
      return "Se clôture dans " + Math.floor(diff / 30) + " mois";
    }
    if (diff >= 365) {
      const years = Math.floor(diff / 365) === 1 ? "an" : "ans";
      return "Se clôture dans " + Math.floor(diff / 365) + " " + years;
    }
  };

  return (
    <div className="text-grey-500 flex items-center gap-1 text-sm">
      <img src={clock} alt="clock icon" />
      <p>{formatClosingDate()}</p>
    </div>
  );
};
