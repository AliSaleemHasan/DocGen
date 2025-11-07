import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PreviousDocsListItem from "../PreviousDocsListItem";
const PreviousDocsCard = () => {
  return (
    <Card className=" min-h-[70vh] flex-1 min-w-md">
      <CardHeader>
        <CardTitle>Previous Documentation</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <PreviousDocsListItem />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default PreviousDocsCard;
