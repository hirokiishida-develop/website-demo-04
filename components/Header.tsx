import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <header>
      <div className="flex items-center justify-between fixed top-0 left-0 right-0 p-4 z-50">
        <Link href="/">
          <Image
            src="/images/common/logo_wh.png"
            alt="せきがはら人間村"
            width={150}
            height={20}
          />
        </Link>
        <button className="flex items-center justify-center text-white text-[10px] w-15 h-6 bg-black rounded-[50px]">MENU</button>
      </div>
    </header>
  );
}