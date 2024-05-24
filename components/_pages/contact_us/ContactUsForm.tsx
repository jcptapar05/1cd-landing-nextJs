"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
 firstName: z.string().min(2).max(50),
 email: z.string().min(2).max(50),
 company: z.string().min(2).max(50),
 telNumber: z.string().min(2).max(50),
 message: z.string().min(2).max(50),
});

const ContactUsForm = () => {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   firstName: "",
   email: "",
   company: "",
   message: "",
   telNumber: "",
  },
 });

 const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values);
 };

 return (
  <div className="p-10 md:w-3/5 text-[#0E2D63] bg-white">
   <h3 className="uppercase">CONTACT US</h3>
   <h2 className="text-[36px]">Let&apos;s Start a Conversation!</h2>
   <div className="mt-4 w-full">
    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col md:flex-row gap-x-8 gap-y-10 md:gap-y-0">
       <div className="w-full">
        <FormField
         control={form.control}
         name="firstName"
         render={({ field }) => (
          <FormItem>
           <FormLabel>First Name</FormLabel>
           <FormControl>
            <Input
             placeholder="Enter your name"
             {...field}
             className="focus-visible:ring-0 border-t-0 border-l-0 border-r-0 rounded-none border-[#0E2D63] border-b-2 px-0"
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="w-full">
        <FormField
         control={form.control}
         name="email"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Email</FormLabel>
           <FormControl>
            <Input
             placeholder="Enter your email"
             {...field}
             className="focus-visible:ring-0 border-t-0 border-l-0 border-r-0 rounded-none border-[#0E2D63] border-b-2 px-0"
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-x-8 gap-y-10 md:gap-y-0 mt-10">
       <div className="w-full">
        <FormField
         control={form.control}
         name="company"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Company</FormLabel>
           <FormControl>
            <Input
             placeholder="Enter Company"
             {...field}
             className="focus-visible:ring-0 border-t-0 border-l-0 border-r-0 rounded-none border-[#0E2D63] border-b-2 px-0"
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="w-full">
        <FormField
         control={form.control}
         name="telNumber"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Tel #</FormLabel>
           <FormControl>
            <Input
             placeholder="+63"
             {...field}
             type="number"
             className="focus-visible:ring-0 border-t-0 border-l-0 border-r-0 rounded-none border-[#0E2D63] border-b-2 px-0"
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
      </div>
      <div className="w-full mt-8">
       <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
         <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
           <Textarea
            placeholder="Message"
            {...field}
            className="focus-visible:ring-0 border-t-0 border-l-0 border-r-0 rounded-none border-[#0E2D63] border-b-2 px-0"
           />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
      </div>
      <div className="text-end">
       <Button
        type="submit"
        className="w-full md:w-fit self-end rounded-full py-4 mt-8 md:py-7 bg-[#0E2D63] uppercase font-semibold text-[10px] md:text-[14px] tracking-wide"
       >
        Submit
       </Button>
      </div>
     </form>
    </Form>
   </div>
  </div>
 );
};

export default ContactUsForm;
