import { Eye } from "lucide-react";
import { ListItem, ListItemAction, ListItemDescreption } from "./ui/list-item";

const PreviousDocsListItem = () => {
  return (
    <ListItem className="">
      <ListItemDescreption>
        <p>This is thest</p>
        <p>this is description</p>
      </ListItemDescreption>
      <ListItemAction>
        <p>View</p>
        <Eye />
      </ListItemAction>
    </ListItem>
  );
};

export default PreviousDocsListItem;
