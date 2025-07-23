// components/SimpleDatePicker.tsx
"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns"; // Make sure date-fns is imported for formatting

interface Props {
  value: Date | null; // This is the type from your form (Date | null)
  onChange: (date: Date | null) => void; // This is the type your form expects back
  placeholder?: string;
  minDate?: Date;
}

export const SimpleDatePicker: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "Select date",
  minDate,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between font-normal"
        >
          {/* Display formatted date if value exists (is not null), otherwise placeholder */}
          {value ? format(value, "PPP") : placeholder}
          <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-white shadow-lg border rounded-md"
        align="start"
      >
        <Calendar
          mode="single"
          // Fix 1: Convert null to undefined for the 'selected' prop
          selected={value || undefined}
          captionLayout="dropdown"
          onSelect={(date) => {
            // Fix 2: Convert undefined from Calendar to null for SimpleDatePicker's onChange
            onChange(date || null);
            setOpen(false);
          }}
          disabled={minDate ? (date) => date < minDate : undefined}
          // initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
