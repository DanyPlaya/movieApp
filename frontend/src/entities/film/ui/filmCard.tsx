import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Ratings,
} from "@/shared/ui";
import { Film } from "../model/types";

type FilmCardProps = {
  film: Film;
};
export const FilmCard = (props: FilmCardProps) => {
  const { film } = props;
  return (
    <Card className="">
      <CardHeader className="border-b gap-2">
        <CardTitle className="truncate">{film.title}</CardTitle>
        <CardDescription className="flex gap-4 items-center">
          <p className="font-semibold ">Год выпуска</p>
          <p>{film?.release_year}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 border-b grid h-44 grid-cols-2 items-start">
        {film.image ? (
          <img className="w-20 h-20 rounded-lg" src={film.image} alt="" />
        ) : (
          <div className="w-20 h-20 bg-slate-500 rounded-lg" />
        )}
        <div>
          <p>Краткое описание</p>
          <p>{film?.summary}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center p-4">
        <Ratings rating={film?.rating} variant="yellow" totalStars={10} />
      </CardFooter>
    </Card>
  );
};
