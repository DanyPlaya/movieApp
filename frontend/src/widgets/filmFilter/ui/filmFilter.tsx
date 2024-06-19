import { useGetDirectors } from "@/entities/director/api/directorApi";
import { useGetGenre } from "@/entities/genre";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
const formSchema = z.object({
  genre: z.string().optional(),
  director: z.string().optional(),
  start_year: z.coerce.number().optional(),
  end_year: z.coerce.number().optional(),
});
// .string()
//     .refine((val) => !Number.isNaN(parseInt(val, 10)), {
//       message: "Expected number, received a string",
//     })
//     .optional(),
type FilmFilterProps = {
  setFilterData: (
    filters: Partial<{
      director: string;
      end_year: number;
      genre: string;
      start_year: number;
    }>
  ) => void;
};
export const FilmFilter = (props: FilmFilterProps) => {
  const { setFilterData } = props;
  const { data: directors } = useGetDirectors();
  const { data: genres } = useGetGenre();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      director: "",
      genre: "",
      end_year: 0,
      start_year: 0,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setFilterData(values);
    // console.log(values);
  }
  //   console.log(directors);
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant={"outline"}>Фильтры</Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none p-6">
        {/* <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
            <FormField
              control={form.control}
              name="start_year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Дата начала</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите начальную дату" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end_year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Дата конца</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите конечную дата" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="director"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Режисер</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите режисера" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {directors?.map((director) => (
                        <SelectItem key={director.name} value={director.name}>
                          {director.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Режисер</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите жанр" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {genres?.map((genre) => (
                        <SelectItem key={genre} value={genre}>
                          {genre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            <Button onClick={() => form.reset(form.formState.defaultValues)}>
              Сбросить
            </Button>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
};
