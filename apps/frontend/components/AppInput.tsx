"use client";
import { ReactNode, useRef } from "react";
import { Input } from "@/components/ui/input";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface AppInputProps {
  Icon?: ReactNode;
  inputProps?: React.ComponentProps<"input">;
  className?: ClassValue;
}
export default function AppInput({
  inputProps,
  Icon,
  className,
}: AppInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() =>
        inputProps?.type === "file"
          ? inputRef.current?.click()
          : inputRef.current?.focus()
      }
      // 1. Apply standard shadcn Input base styles to this parent div
      // 2. Use 'focus-within' instead of 'focus-visible' for the ring
      className={cn(
        "flex  h-fit w-full items-center rounded-md  shadow-sm bg-primary/10 p-5 text-sm  cursor-text gap-2",
        className
      )}
    >
      {Icon}
      <Input
        ref={inputRef}
        {...inputProps}
        // 3. Strip all default styling from the actual Input component
        className={cn(
          "border-none  h-full shadow-none p-0 focus-visible:ring-0  bg-transparent",
          inputProps?.className
        )}
      />
    </div>
  );
}
