import Link from "next/link";

export default function NavLink(props: { href: string; name: string }) {
  const { href, name } = props;

  return (
    <Link href={href} className="hover:text-gray-900">
      {name}
    </Link>
  );
}
