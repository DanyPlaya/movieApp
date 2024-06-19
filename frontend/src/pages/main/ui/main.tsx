import { FilmList } from "@/features/film";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from "@/shared/ui";

export const MainPage = () => {
  return (
    <div className="p-4 grid gap-4 bg-[#F7F7F7]">
      <div className="flex gap-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Фильтры</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Input />
      </div>
      <FilmList />
    </div>
  );
};
