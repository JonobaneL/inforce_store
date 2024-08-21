import { useFilterContext } from "@/context/filterContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SortSelect = () => {
  const { sort, setSort } = useFilterContext();
  return (
    <Select value={sort} onValueChange={(value) => setSort(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name">Name</SelectItem>
        <SelectItem value="cout">Cout</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
