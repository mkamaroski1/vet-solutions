"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Info, WhatsApp } from "./formText";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  username: z.string().min(7, {
    message: "Username must be at least 7 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  type: z.enum(["yes", "no", "other"], {
    required_error: "You need to select a notification type.",
  }),
  type2: z.enum(["clinic", "hospital", "petShop", "another"], {
    required_error: "You need to select a notification type.",
  }),
  invoicing: z.string().min(3, {
    message: "Min 3 numbers.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-blue-950 w-[629px] ml-auto  h-[77rem] rounded-3xl text-white mr-[3rem]"
      >
        <div className="w-[30rem] h-[8rem] mt-[2rem] ml-[5rem]">
          <Info />
        </div>
        <div className="ml-[3rem] space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">Nome</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white w-[33rem]"
                    placeholder="Digite seu nome"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white w-[33rem]"
                    type="email"
                    placeholder="Digite seu E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="ml-[3rem] space-y-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className=" underline text-2xl">
                  Você possui uma empresa formalizada?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 text-xl"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Sim</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">Não</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="other" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Sou autônomo
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type2"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className=" underline text-2xl">
                  Sua empresa é:
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="clinic" />
                      </FormControl>
                      <FormLabel className="font-normal">clinica</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="hospital" />
                      </FormControl>
                      <FormLabel className="font-normal">Hospital</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="petShop" />
                      </FormControl>
                      <FormLabel className="font-normal">Pet Shop</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="another" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Sou autônomo
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="invoicing"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">
                  Qual é a media de seu faturamento?
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-white w-[33rem]"
                    placeholder="R$"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Enviar</Button>
          <WhatsApp />
        </div>
      </form>
    </Form>
  );
}
