import { client } from "./client";

export const fetchReference = async (refId: string) => {
  const doc = await client.getDocument(refId);

  return doc;
};
