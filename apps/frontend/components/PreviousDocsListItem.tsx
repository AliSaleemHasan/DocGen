import { Eye } from "lucide-react";
import { ListItem, ListItemAction, ListItemDescreption } from "./ui/list-item";
import { Button } from "./ui/button";

interface Props {
  projectName: string;
  endpoints?: string;
}
const PreviousDocsListItem = (props: Props) => {
  return (
    <ListItem className="">
      <ListItemDescreption>
        <h4 className="text-sm">{props.projectName}</h4>
        <p className="text-xs text-muted-foreground">
          {props.endpoints || "No"} Endpoints
        </p>
      </ListItemDescreption>
      <Button className="cursor-pointer" variant={"outline"} asChild>
        <ListItemAction>
          <p className="text-sm">View</p>
          <Eye />
        </ListItemAction>
      </Button>
    </ListItem>
  );
};

export default PreviousDocsListItem;
