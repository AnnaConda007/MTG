export type Set = {
  code: string;
  name: string;
  iconUrl: string;
  imageUrl: string;
  releaseDate: string;
};

export interface GetSetsParams {
  page?: number;
  size?: number;
}