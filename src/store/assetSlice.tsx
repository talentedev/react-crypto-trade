import { getAssets } from "../services/assetApi";

const createAssetSlice = (set: any, get: any) => ({
  loading: false,
  assets: [],
  fetchAssets: async (limit: number) => {
    set({ loading: true });
    const assets = await getAssets(limit);
    set({ assets: assets.data });
    set({ loading: false });
  }
});

export default createAssetSlice;