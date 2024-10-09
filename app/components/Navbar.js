import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
const links = [
  { title: "Motobikes", link: "/motobike" },
  { title: "Helments", link: "/helments" },
  { title: "Apparel", link: "/apparel" },
  { title: "Accessories", link: "/accessories" },
  { title: "Service", link: "/service" },
];
export default function Navbar() {
  return (
    <nav className="container mx-auto text-black flex justify-between">
      <div className="h-12 flex justify-center items-center">
        <a href="/">Home</a>
      </div>
    <div className="flex gap-4">
    {links.map((link) => (
        <div
          key={link.title}
          className="flex gap-4 h-12 justify-center items-center"
        >
          <a href={link.link} className="cursor-pointer hover:underline">
            <h3>{link.title} </h3>
          </a>
        </div>
      ))}
    </div>
      <div className="flex gap-4 h-12 justify-center items-center">
        <CiUser size={24} className="cursor-pointer"/>
        <div>
          <div className="relative">
            <p className="absolute bg-slate-300 text-xs rounded-full px-1 left-5">
              0
            </p>
          </div>
          <PiShoppingCartThin size={24} className="relative cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
