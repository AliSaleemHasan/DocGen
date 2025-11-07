import { Eye } from "lucide-react";
import { ListItem, ListItemAction, ListItemDescreption } from "./ui/list-item";
import { Button } from "./ui/button";
import { endpoint_colors, EndpointMethod } from "@/constants";

interface Props {
  endpoint: {
    url: string;
    method: keyof typeof EndpointMethod;
  };
}
const Endpoint = ({ endpoint }: Props) => {
  return (
    <ListItem className="">
      <ListItemDescreption className="flex flex-row  items-center justify-start gap-4  ">
        <div
          className="text-white text-sm w-fit p-2 px-4 min-w-20 rounded-lg "
          style={{ background: endpoint_colors[endpoint.method] }}
        >
          <p className="text-center">{endpoint.method}</p>
        </div>
        <h4 className="text-sm">{endpoint.url}</h4>
      </ListItemDescreption>
      <Button className="cursor-pointer" variant={"outline"} asChild>
        <ListItemAction>
          <p className="text-sm">Details</p>
          <Eye />
        </ListItemAction>
      </Button>
    </ListItem>
  );
};

export default Endpoint;
