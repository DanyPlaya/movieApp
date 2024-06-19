import { Button } from "@/shared/ui";
import { FilmIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <header className="h-20 bg-[#00274D] text-white flex justify-between p-4 items-center  ">
      <div className=" flex items-center">
        <Link to={"/"}>
          <FilmIcon className="w-20 h-20" />
        </Link>
        <div className="uppercase font-bold text-2xl">Cinema Archives</div>
      </div>
      <Link to={"/charts"}>Графики</Link>
      <Button variant={"secondary"} onClick={onLogout}>
        Выйти
      </Button>
    </header>
  );
};
