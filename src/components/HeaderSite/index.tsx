import Image from "next/image";
import { HeaderLogo, NavLink } from "../../styles/components/HeaderSite";
import Link from "next/link";

export default function HeaderSite() {
  return (
    <>
      <Image src="/logo.png" alt="logo" width={1120} height={140} />
      <HeaderLogo>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/sorteio" passHref>
          <NavLink>Sorteio</NavLink>
        </Link>
      </HeaderLogo>
    </>
  );
}
