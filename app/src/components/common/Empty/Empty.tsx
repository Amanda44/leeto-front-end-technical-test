import { EmptyProps } from "./types";

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="flex items-center justify-center h-full">
      <span className="text-blue-500">{label}</span>
    </div>
  );
};
