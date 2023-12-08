import Image from "next/image";
import Link from "next/link";

const Item = ({ value, linkHref, icon, important, color }) => {
  return (
    <li className="my-2 font-semibold">
      <Link
        href={linkHref}
        className={`flex items-center gap-2 ${color ? color : null } hover:text-blue-600`}
      >
        {icon ? <Image src={icon} width={20} height={20} /> : null }
        {value}
        { important 
        ? 
        <div className="flex items-center justify-center p-3 rounded-full bg-gray-200 text-sm text-gray-400">
          <span className="absolute">4</span>
        </div>
        : null }
      </Link>
    </li>
  );
};

export default Item;
