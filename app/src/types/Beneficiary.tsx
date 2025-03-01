export type Beneficiary = {
  id: number;
  type: "user" | "companion" | "child";
  firstName: string;
  consumption: {
    allowedAmount: number;
    consumedAmount: number;
  };
};
