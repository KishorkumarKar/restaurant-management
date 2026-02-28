"use client";
import { Column } from "@/hooks/useTable";
import { useTable } from "@/hooks/useTable";
import Link from "next/link";
interface TableProps<T> {
  title: string;
  page: number;
  size: number;
  totalCount: number;
  description?: string;
  tableColumns: Column<T>[];
  tableData: T[];
  searchKeys: (keyof T)[];
  getNextData?: (page: number) => void;
}

export function CommonTable<T>({
  title,
  description,
  tableColumns,
  tableData,
  searchKeys,
  page,
  size,
  totalCount,
  getNextData,
}: TableProps<T>) {
  const { columns, data, search, setSearch } = useTable<T>({
    data: tableData,
    searchKeys: searchKeys,
    columns: tableColumns,
  });

  const totalPages = Math.ceil(totalCount / size); // 9
  const getPagination = (currentPage: number): number[] => {
    const maxVisible = 3;
    const pages: number[] = [];

    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + maxVisible - 1);

    // Adjust if we're near the end
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };
  return (
    <div className="border border-dashed rounded-3xl p-4 flex flex-col">
      <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-slate-500">{description}</p>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="h-10 px-3 border rounded text-sm"
        />
      </div>
      <div className="overflow-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="p-4 border-b bg-slate-50 text-sm text-slate-500"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-4 border-b text-sm text-slate-700"
                  >
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : String(row[col.accessor])}
                  </td>
                ))}
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center p-6 text-slate-400"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {totalCount > size && (
        <div className="w-full flex justify-center items-center mt-2 rounded-3xl">
          <nav aria-label="Page navigation example">
            <ul className="flex -space-x-px text-sm">
              {page - 1 >= 1 && (
                <li>
                  <Link
                    onClick={() => getNextData?.(page - 1)}
                    href="#"
                    className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-gray-300 hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-3xl text-sm px-3 h-9 focus:outline-none"
                  >
                    Previous
                  </Link>
                </li>
              )}
              {getPagination(page).map((pagination) => {
                return (
                  <li key={pagination}>
                    <Link
                      onClick={() => getNextData?.(pagination)}
                      href="#"
                      className={`flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-gray-300 hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none ${page == pagination ? "bg-blue-200" : ""} `}
                    >
                      {pagination}
                    </Link>
                  </li>
                );
              })}

              {/* <li>
                <Link
                  href="#"
                  className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-gray-300 hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none"
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-gray-300 hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none"
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-gray-300 hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none"
                >
                  3
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-gray-300 hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none"
                >
                  4
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-gray-300 hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none"
                >
                  5
                </Link>
              </li> */}
              {totalPages != page && totalPages > page && (
                <li>
                  <Link
                    onClick={() => getNextData?.(page + 1)}
                    href="#"
                    className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-gray-300 hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-3xl text-sm px-3 h-9 focus:outline-none"
                  >
                    Next
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
