import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PreviousDocsListItem from "../PreviousDocsListItem";
const PreviousDocsCard = () => {
  return (
    <Card className=" min-h-[70vh] max-h-[70vh]  flex-1 min-w-md">
      <CardHeader>
        <CardTitle>Previous Documentation</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className="scrollbar overflow-y-scroll overflow-x-hidden">
        {new Array(10).fill(null).map((_, index) => (
          <PreviousDocsListItem
            key={index}
            projectName={`Test Project ${index + 1}`}
            endpoints={(index + 1 * 2).toString()}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default PreviousDocsCard;
