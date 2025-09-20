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
    <div className="container px-4 py-6 body">
      <div
        className="flex justify-between items-center mb-8"
        style={{ marginBottom: "80px" }}
      >
        <h1 className="text-2xl font-bold">Team Members</h1>

        <div className="flex items-center space-x-2 gap-3">
          <Input
            type="text"
            placeholder="Search Team Member"
            className="w-64"
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
