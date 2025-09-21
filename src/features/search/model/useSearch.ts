"use client";
import { useState } from "react";

export function useSearch() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const SearchApiUrl = "https://jsonplaceholder.typicode.com/users";  
 
  const search  = async(query: string) =>{
    setLoading(true);
    const res = await fetch(`${SearchApiUrl}?q=${query}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  }

  return { results, loading, search };
}
