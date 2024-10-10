"use client";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";
const links = [
  { title: "Motobikes", link: "/motobike" },
  {
    title: "Helmets",
    link: "/helmets",
    subLink: [
      {
        title: "Fullface",
        link: "/helmets/fullface",
        image:
          "https://pngimg.com/uploads/motorcycle_helmets/motorcycle_helmets_PNG9630.png",
      },

      {
        title: "Open Face",
        link: "/helmets/openface",
        image:
          "https://pngimg.com/uploads/motorcycle_helmets/motorcycle_helmets_PNG9631.png",
      },
      {
        title: "Modular",
        link: "/helmets/modular",
        image:
          "https://pngimg.com/uploads/motorcycle_helmets/motorcycle_helmets_PNG9632.png",
      },
    ],
  },
  { title: "Apparel", link: "/apparel" },
  { title: "Accessories", link: "/accessories" },
  { title: "Service", link: "/service" },
];
export default function Navbar() {
  const partName = usePathname();
  console.log(partName);
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
              <div key={link.title} className="group hover:bg-black">
                <div
                  className={`${
                    partName === link.link ? "bg-black underline" : ""
                  } flex gap-4 h-16 px-4 justify-center items-center `}
                >
                  <a
                    href={link.link}
                    className="cursor-pointer hover:underline"
                  >
                    <h3>{link.title} </h3>
                  </a>
                </div>
                {link.subLink && (
                  <div className="bg-white border container mx-auto shadow-sm p-4  justify-center absolute z-20 top-16 right-0 left-0 hidden group-hover:flex ">
                    <div className="flex gap-10 font-monument">
                      {link.subLink.map((subLink) => (
                        
                        <div key={subLink.title} className="flex flex-row gap-10">
                          <a
                            href={subLink.link}
                            className="flex flex-col justify-center items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:translate-y-2"
                          >
                            <div className="w-24">
                              <img src={subLink.image} alt={subLink.image}  className="transform transition duration-300 ease-in-out hover:scale-110"/>
                            </div>
                            <p className="text-black">{subLink.title}</p>
                          </a>
                          <div className="border"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
