import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathName = usePathname();
  const pathParts = pathName.split("/").filter((part) => part); // Split the path into parts
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <nav className="text-sm text-gray-600 my-4">
      {/* Breadcrumb container */}
      <ol className="inline-flex list-none p-0 space-x-2">
        {/* Home link */}
        <li>
          <Link href="/" className={`text-black/80 hover:underline`}>
            Home
          </Link>
        </li>

        {/* Loop through the path parts to generate breadcrumb */}
        {pathParts.map((part, index) => {
          const href = "/" + pathParts.slice(0, index + 1).join("/");
          const isLast = index === pathParts.length - 1; // Check if it's the last breadcrumb
          return (
            <div key={href} className="flex items-center">
              <span className="mx-2">{`>`}</span>
              {isLast ? (
                <span className="text-blue-500 font-semibold">
                  {capitalize(part)}
                </span> // Last part in black
              ) : (
                <Link href={href} className="text-black/80 hover:underline">
                  {capitalize(part)}
                </Link>
              )}
            </div>
          );
        })}
      </ol>
    </nav>
  );
}
