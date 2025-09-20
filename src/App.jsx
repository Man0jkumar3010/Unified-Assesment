import { useState } from "react";
import "./App.css";
import { MainView } from "./components/ui/custom/MainView";
import { MemberViewList } from "./components/ui/custom/MemberViewList";
import { Input } from "./components/ui/input";
import { members, roles } from "./lib/data";
import { SelectList } from "./components/ui/custom/SelectList";

function App() {
  const [searchMember, setSearchMember] = useState("");
  const [filteredMember, setFilteredMember] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  const handleSearchTeamMember = (e) => {
    const value = e.target.value;
    setSearchMember(value);

    const newFilteredItems = members.filter((member) =>
      member?.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMember(newFilteredItems);
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 body min-h-screen">
      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0"
        style={{ marginBottom: "40px" }}
      >
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          Team Members
        </h1>

        <div className="mb-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3 md:gap-4 lg:gap-5">
          <Input
            type="text"
            placeholder="Search Team Member"
            className="w-full sm:w-64"
            onChange={handleSearchTeamMember}
            value={searchMember}
          />
          <SelectList roles={roles} onRoleSelect={setSelectedRole} />
        </div>
      </div>

      <MainView
        members={members}
        filteredMember={filteredMember}
        sourceName="member"
        ItemComponent={MemberViewList}
        searchValue={searchMember}
        selectedRole={selectedRole}
      />
    </div>
  );
}

export default App;
