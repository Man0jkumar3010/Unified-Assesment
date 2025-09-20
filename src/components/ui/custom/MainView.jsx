export const MainView = ({
  members,
  sourceName,
  ItemComponent,
  filteredMember,
  searchValue,
  selectedRole,
}) => {
  let itemsToDisplay = searchValue ? filteredMember : members;

  if (selectedRole) {
    itemsToDisplay = itemsToDisplay.filter(
      (member) => member.role === selectedRole
    );
  }

  const isSearching = searchValue.trim() !== "";
  const isRoleFiltering = selectedRole && selectedRole.trim() !== "";
  const hasNoResults = itemsToDisplay.length === 0;

  const getNoResultsMessage = () => {
    if (isSearching && isRoleFiltering) {
      return `No team members match "${searchValue}" with role "${selectedRole}"`;
    } else if (isSearching) {
      return `No team members match "${searchValue}"`;
    } else if (isRoleFiltering) {
      return `No team members found with role "${selectedRole}"`;
    }
    return "No results found";
  };

  return (
    <>
      {hasNoResults ? (
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <div className="text-gray-500 text-base sm:text-lg mb-2 text-center">
            No results found
          </div>
          <div className="text-gray-400 text-xs sm:text-sm text-center px-2">
            {getNoResultsMessage()}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 sm:p-4">
          {itemsToDisplay.map((member, i) => (
            <ItemComponent key={i} {...{ [sourceName]: member }} />
          ))}
        </div>
      )}
    </>
  );
};
