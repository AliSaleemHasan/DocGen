import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PreviousDocsListItem from "../PreviousDocsListItem";
const EndpointsCard = () => {
  return (
    <Card className=" min-h-[70vh] max-h-[70vh]  flex-1 min-w-md">
      <CardHeader>
        <CardTitle>Previous Documentation</CardTitle>
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

export default EndpointsCard;
