import { fetcher } from '../utils/fetcher';

const endpoint = "https://data.messari.io/api/v1";

export const getAssets = (limit: number = 10) => {
  return fetcher(`${endpoint}/assets?limit=${limit}`)
};
