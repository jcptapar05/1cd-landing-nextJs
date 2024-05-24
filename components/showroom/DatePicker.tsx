import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { FaArrowRight } from "react-icons/fa6";

type DatePickerProps = {
  onSelect: (dateTime: Date) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ onSelect }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [time, setTime] = useState<string>("12:00");

  const handleSelectDate = (datePickerDate: Date | undefined) => {
    if (datePickerDate) {
      setDate(datePickerDate);
      setShowTimePicker(true);
    }
  };

  const handleSelectDateTime = () => {
    if (date) {
      const [hours, minutes] = time.split(":").map(Number);
      const selectedDateTime = new Date(date);
      selectedDateTime.setHours(hours, minutes);
      onSelect(selectedDateTime);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-transparent justify-start px-0 md:py-10 text-[#0E2D63] hover:bg-transparent">
          <p className="font-bold text-[12px] md:text-base">
            View all Availability
          </p>
          <CalendarIcon className="mx-2 ml-4 h-[10px] md:h-4 w-3 md:w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelectDate}
          initialFocus
        />
        {showTimePicker && (
          <div className="mt-4 w-full flex items-center justify-center">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <Button onClick={handleSelectDateTime} className="ml-4">
              Select
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
