import { FiUser } from "react-icons/fi";

export default function Navbar() {
  const eventName = "Demo M2";
  return (
    <section className="flex justify-between p-4 bg-blue text-white">
      <h2 className="text-xl">{eventName}</h2>
      <span className="cursor-pointer"><FiUser className="text-2xl" /></span>
    </section>
  );
}
