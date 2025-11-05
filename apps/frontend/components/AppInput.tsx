"use client";
import { ReactNode, useRef } from "react";
import { Input } from "@/components/ui/input";

interface AppInputProps {
  Icon?: ReactNode;
  inputProps?: React.ComponentProps<"input">;
}
export default function AppInput({ inputProps, Icon }: AppInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      // 1. Apply standard shadcn Input base styles to this parent div
      // 2. Use 'focus-within' instead of 'focus-visible' for the ring
      className="flex h-14 w-full items-center rounded-md  shadow-lg bg-muted/40 px-3 py-2 text-sm  cursor-text gap-2"
    >
      {Icon}
      <Input
        ref={inputRef}
        {...inputProps}
        // 3. Strip all default styling from the actual Input component
        className={`${inputProps?.className} border-none  h-full shadow-none p-0 focus-visible:ring-0  bg-transparent `}
      />
    </div>
  );
}
