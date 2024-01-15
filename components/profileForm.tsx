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
        className="bg-blue-950 shadow-xl shadow-black p-[2.5rem] items-center rounded-lg text-white"
      >
        <div className="text-xl pb-2 flex justify-center font-bold">
          INFORMAÇÕES E ORÇAMENTOS
        </div>
        <p className="max-w-[20rem] font-extralight text-center pb-6 text-sm mx-auto">
          Preencha o formulario ou clique no link abaixo para entrar em contato
          com a nossa equipe
        </p>
        <div className="">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Nome</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black"
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
              <FormItem className="mt-4">
                <FormLabel className="text-md">E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black"
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
        <div className="">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="text-md">
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
              <FormItem className="pt-4">
                <FormLabel className="text-md">Sua empresa é:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className=""
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="clinic" />
                      </FormControl>
                      <FormLabel className="font-normal">Clínica</FormLabel>
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
              <FormItem className="pt-6">
                <FormLabel className="text-md">
                  Qual é a media de seu faturamento?
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="bg-white text-black"
                    placeholder="R$"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="p-4 flex justify-center">
            <Button className="hover:bg-slate-900 w-11/12" type="submit">
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
