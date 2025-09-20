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
      <div>
        <Select onValueChange={handleRoleSelect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder=" Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectContent>
              <ScrollArea className="h-[65px] ">
                {roles.map((role, index) => (
                  <SelectItem key={index} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
