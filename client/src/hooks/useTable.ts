"use client";
import { useState, useMemo } from "react";

export interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, row: T) => React.ReactNode;
}

interface UseTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchKeys?: (keyof T)[];
}

export function useTable<T>({
  data,
  columns,
  searchKeys = [],
}: UseTableProps<T>) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search) return data;

    return data.filter((row) =>
      searchKeys.some((key) =>
        String(row[key])
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [search, data, searchKeys]);

  return {
    columns,
    data: filteredData,
    search,
    setSearch,
  };
}