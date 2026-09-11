"use client";

import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="breadcrumb-paper">
        {/* Paper clip decoration */}
        <div className="breadcrumb-clip" aria-hidden="true">
          <svg
            width="32"
            height="45"
            viewBox="0 0 92 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57 15c-4-12-22-12-26 0l-12 65c-2 14 19 21 25 7l10-51"
              stroke="#4b3b1c"
              strokeWidth="3"
            />
          </svg>
        </div>

        <ol className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={index}
                className={`breadcrumb-item ${isLast ? "is-current" : ""}`}
              >
                {isLast ? (
                  <span className="breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href || "#"} className="breadcrumb-link">
                      {item.label}
                    </Link>
                    <span className="breadcrumb-separator" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}