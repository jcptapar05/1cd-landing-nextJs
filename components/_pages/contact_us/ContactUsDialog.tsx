import React from "react";

import {
 Dialog,
 DialogClose,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactUsDetails from "./ContactUsDetails";
import ContactUsForm from "./ContactUsForm";
import { ScrollArea } from "@/components/ui/scroll-area";

const ContactUsDialog = () => {
 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button
     className={`text-[#0E2D63] bg-white py-3 shadow-lg px-5 rounded-full text-[11px] font-extrabold uppercase hover:bg-white`}
    >
     Contact us
    </Button>
   </DialogTrigger>
   <DialogContent className="p-0 sm:max-w-[900px] border-none">
    <ScrollArea className="max-h-[95vh] w-full sm:max-w-[900px] p-0">
     <div className="md:flex p-0">
      <ContactUsDetails></ContactUsDetails>
      <ContactUsForm></ContactUsForm>
     </div>
    </ScrollArea>
   </DialogContent>
  </Dialog>
 );
};

export default ContactUsDialog;
