'use client'
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";
const links = [
  { title: "Motobikes", link: "/motobike" },
  { title: "Helmets", link: "/helmets", subLink: [{title: 'Fullface', link:'/helmets/fullface'}] },
  { title: "Apparel", link: "/apparel" },
  { title: "Accessories", link: "/accessories" },
  { title: "Service", link: "/service" },
];
export default function Navbar() {
  const partName = usePathname();
  console.log(partName)
  return (
    <>
      <div className="flex gap-4 h-12 justify-end px-10 items-center">
        <CiUser size={24} className="cursor-pointer" />
        Login
        <div>
          <div className="relative">
            <p className="absolute bg-slate-300 text-xs rounded-full px-1 left-5">
              0
            </p>
          </div>
          <PiShoppingCartThin size={24} className="relative cursor-pointer" />
        </div>
      </div>
      <nav className="mx-auto text-black bg-black/80 flex justify-between relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="h-16 flex justify-center items-center">
            <a
              href="/"
              className="italic font-bold text-3xl font-monument text-white uppercase"
            >
              Motobike store
            </a>
          </div>

          <div className="flex text-white">
            {links.map((link) => (
              <div
                key={link.title}
                className={`${partName === link.link ? 'bg-black underline' : ''} flex gap-4 h-16 px-4 justify-center items-center`}
              >
                <a href={link.link} className="cursor-pointer hover:underline">
                  <h3>{link.title} </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="shadow-sm p-4 bg-slate-300">
        <div className="container mx-auto  justify-center flex">
          <ul className="grid grid-cols-4 gap-4">
            <a>sddsdsd</a>
            <a>sddsdsd</a>
            <a>sddsdsd</a>
          </ul>
        </div>
      </div>
    </>
  );
}
