import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/photos/svg/logo 1.svg";
import FacebookIcon from "../../../public/photos/svg/ps_facebook-alt.svg";
import InstagramIcon from "../../../public/photos/svg/ri_instagram-fill.svg";
export default function FooterComponent() {
  return (
    <footer className="flex flex-col bg-[#292D3D] py-8">
      <div className="flex justify-between items-center text-white w-11/12 mx-auto py-6">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>

        <div className=" flex gap-4 items-center">
          <Link href="/">DesLink re noi</Link>
          <Link href="/">Servicii</Link>
          <Link href="/">Noutăți</Link>
          <Link href="/">Contacte</Link>
          <Link href="/">Politica de confidențialitate</Link>
        </div>
        <div className=" flex gap-4 items-center">
          <Link href="/facebook">
            <Image src={FacebookIcon} alt="facebook" />
          </Link>
          <Link href="/instagram">
            <Image src={InstagramIcon} alt="instagram" />
          </Link>
        </div>
      </div>
      <p className="text-[#757575] flex justify-center">
        &copy; Toate drepturile sunt rezervate. Tourist Home 24
      </p>
    </footer>
  );
}
