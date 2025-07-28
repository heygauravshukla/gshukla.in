import { HiOutlineArrowPath } from "react-icons/hi2";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-50 grid place-items-center bg-gray-950">
      <HiOutlineArrowPath className="size-12 animate-spin stroke-fuchsia-400" />
    </main>
  );
}
