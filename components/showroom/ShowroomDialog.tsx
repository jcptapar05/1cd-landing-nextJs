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
import ShowroomRegister from "./ShowroomRegister";
type ShowroomInfo = {
  title?: string;
  url?: string;
  roomtype?: string;
};
const ShowroomDialog: React.FC<ShowroomInfo> = ({ title, url, roomtype }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`bg-[#FFA800] text-[10px] md:text-base hover:bg-[#FFA800] bg-opacity-70 hover:bg-opacity-100 px-5 py-7 rounded-full uppercase`}
        >
          Enter Now
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[600px] max-w-[95%] md:flex rounded-2xl md:rounded-lg p-0 border-none">
        <ShowroomRegister
          title={title}
          url={url}
          roomtype={roomtype}
        ></ShowroomRegister>
      </DialogContent>
    </Dialog>
  );
};

export default ShowroomDialog;
