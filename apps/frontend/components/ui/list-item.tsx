import { cn } from "@/lib/utils";
import React from "react";

function ListItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item"
      className={cn(
        "flex items-center justify-between w-full min-h-14 flex-wrap bg-muted/40 rounded-md  shadow-lg p-5",
        className
      )}
      {...props}
    />
  );
}

function ListItemAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-action"
      className={cn("ml-auto  flex items-center gap-4", className)}
      {...props}
    />
  );
}

function ListItemDescreption({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      data-slot="item-description"
      className={cn("flex-1  flex flex-col justify-center gap-4 ", className)}
    />
  );
}

export { ListItem, ListItemAction, ListItemDescreption };
