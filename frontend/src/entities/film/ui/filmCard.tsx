import {
  Button,
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
    <Card className="bg-slate-50 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <CardHeader className="border-b p-4 bg-slate-100">
        <CardTitle className="text-xl font-bold">{film.title}</CardTitle>
        <CardDescription className="flex gap-4 items-center mt-2">
          <p className="font-semibold text-gray-600">Год выпуска:</p>
          <p>{film?.release_year}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 flex-1 gap-5 flex flex-col md:flex-row md:items-stretch">
        {film.image ? (
          <img
            className="w-full h-48 object-cover rounded-lg md:w-1/2"
            src={film.image}
            alt={`${film.title} poster`}
          />
        ) : (
          <div className="w-full h-48 bg-slate-500 rounded-lg md:w-1/2 flex items-center justify-center text-white">
            No Image
          </div>
        )}
        <div className="md:flex-1 ">
          <p className="font-semibold text-gray-600">Краткое описание:</p>
          <p className="mt-2 text-gray-700">{film?.summary}</p>
          <div className="mt-4">
            <p className="font-semibold text-gray-600">Жанр:</p>
            <p className="text-gray-700">{film?.genre}</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-gray-600">Режиссёр:</p>
            <p className="text-gray-700">{film?.director}</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-gray-600">Студия:</p>
            <p className="text-gray-700">{film?.studio}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 bg-slate-100">
        <div>
          <Ratings rating={film?.rating} variant="yellow" totalStars={10} />
        </div>
      </CardFooter>
    </Card>
  );
};
