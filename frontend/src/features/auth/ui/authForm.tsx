import {
  Button,
  Card,
  CardContent,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";
const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export const AuthForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password === "admin" && values.username === "admin") {
      localStorage.setItem("username", JSON.stringify(values.username));
      localStorage.setItem("password", JSON.stringify(values.password));
      localStorage.setItem("isAuth", "true");
    }
  }
  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Введите имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите имя" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Введите пароль</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите пароль" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Войти</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
