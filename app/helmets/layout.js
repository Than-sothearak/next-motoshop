"use client";

import Breadcrumb from "../components/Breadcrumb";

export default function HelmetLayout({ children }) {
  return (
    <div className="container mx-auto my-4">
      <Breadcrumb />
      <main className="flex-1">{children}</main>
    </div>
  );
}
