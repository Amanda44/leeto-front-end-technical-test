import { ValidityTimeItemProps } from "./types";
import calendar from "../../../images/calendar.svg";
import { DateTime } from "luxon";

export const ValidityTimeItem = ({
  openingDate,
  closingDate,
}: ValidityTimeItemProps) => {
  const startDate = new Date(openingDate);
  const endDate = new Date(closingDate);

  const formatDate = (date: Date) => {
    if (date === undefined || date === null || isNaN(date.getTime()))
      return "?";
    return DateTime.fromJSDate(date).toLocaleString({
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="text-grey-500 flex items-center gap-1 text-sm">
      <img src={calendar} alt="calendar icon" />
      <p>{formatDate(startDate)}</p>
      <span> - </span>
      <p>{formatDate(endDate)}</p>
    </div>
  );
};
