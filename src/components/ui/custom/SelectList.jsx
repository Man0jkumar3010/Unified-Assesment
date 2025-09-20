import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

export const SelectList = ({ roles, onRoleSelect }) => {
  const handleRoleSelect = (selectedRole) => {
    onRoleSelect(selectedRole);
  };

  return (
    <>
      <div className="w-full sm:w-[180px]">
        <Select
          onValueChange={handleRoleSelect}
          style={{ padding: "10px", border: "2px solid red" }}
        >
          <SelectTrigger className="w-full p-20">
            <SelectValue placeholder=" Select Role" />
          </SelectTrigger>
          <SelectContent
            className="bg-slate-800 text-white"
            style={{ padding: "5px" }}
          >
            <ScrollArea className="h-[65px] ">
              {roles.map((role, index) => (
                <SelectItem
                  key={index}
                  value={role}
                  className="hover:bg-slate-500"
                >
                  {role}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
