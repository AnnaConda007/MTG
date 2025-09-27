"use client";

/*
import { SET_API } from "@/entities/set/set-api.";
import { useState } from "react";
import { Set, GetSetsParams } from "@/entities/set/set";

export function useCardList() {
  const [setList, setSetList] = useState<Set[]>([]);
const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  
  const getCardList  = async({page,size}:GetSetsParams) =>{
        setLoading(true);

    try {
    const res = await SET_API.getList({page,size});
    console.log(res)
      setSetList(res);

    } catch (err) {
        setError(err as Error);
    }
     setLoading(false);

  }

  return { setList, loading,error, getCardList };
}
  */


"use client";
import { useState } from "react";
import { Set, GetSetsParams } from "@/entities/set/set";

export function useCardList() {
  const [setList, setSetList] = useState<Set[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const getCardList = async ({ page, size }: GetSetsParams) => {
      console.log("⚡ getCardList вызван, page:", page);

    setLoading(true);
    try {
      const res = await fetch(`/api/get-sets?page=${page}&size=${size}`);
        if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
      const data: Set[] = await res.json();
  setSetList((prev) => [...prev, ...data]);

    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { setList, loading, error, getCardList };
}
