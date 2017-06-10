export type RequestType = "health" | "security" | "tech";

export type RequestPayload = {
  type: RequestType,
  date: Date,
  comment: string,
};
