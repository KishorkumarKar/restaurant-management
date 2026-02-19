"use client";

import { useRouter } from "next/navigation";
import { authServerLogoutUserAction } from "@/features/auth/server/auth.actions";
import Link from "next/link";

const BackendCommonComponentsSidebar = () => {
  const Router = useRouter();
  const logoutUserAction = async () => {
    await authServerLogoutUserAction();
    Router.push("/login");
  };
  return (
    <aside
      id="cta-button-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/admin/dashboard"
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                className="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
                />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                E-commerce
              </span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="pl-10 flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pl-10 flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pl-10 flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  Invoice
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
              <span className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
                Pro
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">
                2
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
          </li>
          <li>
            <Link
              href="/import"
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0A1.7 1.7 0 0 0 9 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0A1.7 1.7 0 0 0 21 9h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/import"
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
              </svg>

              <span className="flex-1 ms-3 whitespace-nowrap">Import</span>
            </Link>
          </li>
          <li>
            <a
              onClick={() => logoutUserAction()}
              className="flex items-center px-2 py-1.5 text-body rounded-3xl hover:bg-neutral-tertiary hover:text-fg-brand group"
            >
              <svg
                className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
            </a>
          </li>
        </ul>
        <div
          id="alert-additional-content-1"
          className="p-4 mb-4 text-sm text-fg-brand-strong rounded-3xl bg-blue-100 border border-brand-subtle mt-4"
          role="alert"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 shrink-0 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="font-medium">Beta version</h3>
            </div>
            <button
              type="button"
              data-dismiss-target="#alert-additional-content-1"
              aria-label="Close"
              className="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-brand-medium hover:bg-brand-soft inline-flex items-center justify-center h-8 w-8"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
          <div className="mt-2 mb-4">
            Preview the new Flowbite navigation! You can turn the new navigation
            off for a limited time in your profile.
          </div>
          <button
            type="button"
            className="inline-flex items-center  text-white bg-brand hover:bg-amber-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-3xl text-xs px-3 py-1.5 focus:bg-amber-100"
          >
            Turn off now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BackendCommonComponentsSidebar;
