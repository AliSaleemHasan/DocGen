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
      <ListItemDescreption>
        <h4 className="text-sm">{endpoint.url}</h4>
        <div
          className="text-white text-sm p-3 px-4 rounded-lg flex items-center justify-center"
          style={{ background: endpoint_colors[endpoint.method] }}
        >
          <p>{endpoint.method}</p>
        </div>
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
