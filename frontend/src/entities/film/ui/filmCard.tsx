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
    <Card>
      <CardHeader className="border-b gap-2">
        <CardTitle>{film.title}</CardTitle>
        <CardDescription className="flex gap-4 items-center">
          <p className="font-semibold ">Год выпуска</p>
          <p>{film.releaseYear}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 border-b grid h-44 grid-cols-2 items-start">
        <img width={100} height={100} src={film.image} alt="" />
        <div>
          <p>Краткое описание</p>
          <p>{film.shortDescription}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center p-4">
        <Ratings rating={film?.rating} variant="yellow" totalStars={10} />
      </CardFooter>
    </Card>
  );
};
