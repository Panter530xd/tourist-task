"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Person from "../../../public/photos/svg/Person.svg";
import Flag from "../../../public/photos/svg/emojione_flag-for-romania.svg";
import Image from "next/image";
import Logo from "../../../public/photos/svg/logo 1.svg";

export default function NavbarComponent() {
  const pathname = usePathname();

  return (
    <section className="max-w-screen-2xl mx-auto lg:w-[95%] w-11/12 py-6 flex-col gap-4">
      <nav className=" text-black">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={107} height={50} />
            </Link>
          </div>

          <ul className="flex gap-6">
            {[
              { path: "/rezedinte", label: "Reședințe" },
              { path: "/rezervari", label: "Rezervări" },
              { path: "/recenzii", label: "Recenzii" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`font-normal text-base ${
                    pathname === item.path
                      ? "border-b-2 decoration-[#6C759D]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-6">
            {[
              { path: "/favorite", label: "Favorite" },
              { path: "/noutati", label: "Noutăți" },
              {
                path: "/ro",
                label: "RO",
                icon: <Image src={Flag} alt={"Flag"} width={24} height={24} />,
              },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-2 font-normal text-base ${
                    pathname === item.path
                      ? "border-b-2 decoration-[#6C759D]"
                      : ""
                  }`}
                >
                  {item.label}
                  {item.icon && <span className="">{item.icon}</span>}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-6 items-center">
            <li>
              <Link
                href="/listeaza-apartamentul"
                className={`flex items-center gap-2 font-semibold text-base text-[#9D946C] ${
                  pathname === "/listeaza-apartamentul"
                    ? "border-b-2 decoration-[#6C759D]"
                    : ""
                }`}
              >
                Listează-ți apartamentul
              </Link>
            </li>
            <li>
              <Link
                href="/contul-meu"
                className={`flex items-center gap-2 font-semibold text-base text-[#6C759D] ${
                  pathname === "/contul-meu"
                    ? "border-b-2 decoration-[#6C759D]"
                    : ""
                }`}
              >
                Contul meu
                <span>
                  <Image src={Person} alt="Person" width={24} height={24} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
