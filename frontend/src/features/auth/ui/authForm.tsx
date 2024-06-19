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
import { redirect, useNavigate } from "react-router-dom";
const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export const AuthForm = () => {
  const navigate = useNavigate();
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
      navigate("/");
    }
  }
  return (
    <Card className="w-[600px] h-[300px]">
      <CardContent className="">
        <Form {...form}>
          <form className="grid gap-10" onSubmit={form.handleSubmit(onSubmit)}>
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
                    <Input
                      placeholder="Введите пароль"
                      type="password"
                      {...field}
                    />
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
