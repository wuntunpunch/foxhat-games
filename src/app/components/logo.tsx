import Image from "next/image";
import logo from "../images/orange-fox-200x200.png";

export default function Logo() {
  return (
    <div className="text-center mb-5 flex flex-col items-center">
      <Image
        src={logo}
        alt="Foxhat Games Logo"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
