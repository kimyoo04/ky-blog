import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="font-medium text-gray-900 ">
      <span className="text-xl">Yoojacha</span>
    </Link>
  );
}
