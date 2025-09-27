 const API_URL = process.env.NEXT_PUBLIC_MTG_API_URL;
 import { GetSetsParams ,Set} from "@/entities/set/set";

 

export const getSetsApi = async  ({ page = 0, size = 20 }: GetSetsParams = {} ): Promise<Set[]> =>{
 console.log("API_URL", API_URL)
  console.log(" process.env",  process.env)

  const res = await fetch(
    `${API_URL}/sets?page=${page}&size=${size}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Ошибка при получении сетов: ${res}`);
  }

  return res.json() as Promise<Set[]>;
}
