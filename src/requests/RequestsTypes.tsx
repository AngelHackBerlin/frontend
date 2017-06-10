export type RequestType = "health" | "security" | "tech";

export type RequestPayload = {
  id: number,
  type: RequestType,
  date: Date,
  comment: string,
};
