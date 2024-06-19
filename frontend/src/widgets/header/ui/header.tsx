import { FilmIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 bg-[#00274D] text-white flex items-center  ">
      <FilmIcon className="w-20 h-20" />
      <p className="uppercase font-bold text-2xl">Cinema Archives</p>
    </header>
  );
};
