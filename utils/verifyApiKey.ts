export const verifyApiKey = (apiKey: string): boolean => {
  return apiKey === process.env.API_KEY;
};
