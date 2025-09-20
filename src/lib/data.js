export const members = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Developer",
    status: "Active",
    email: "alice@example.com",
    bio: "Frontend developer with 5 years of experience.",
    projects: ["Project Alpha", "Project Beta"],
  },
  {
    id: 2,
    name: "Bob Martin",
    role: "Designer",
    status: "Inactive",
    email: "bob@example.com",
    bio: "UX/UI designer passionate about clean design.",
    projects: ["Project Gamma"],
  },
  {
    id: 3,
    name: "Charlie Smith",
    role: "Manager",
    status: "Active",
    email: "charlie@example.com",
    bio: "Project manager ensuring smooth delivery.",
    projects: ["Project Delta", "Project Epsilon"],
  },
  {
    id: 4,
    name: "Manojkumar ",
    role: "SDE I",
    status: "Active",
    email: "manojkumar.fsd3@gmail.com",
    bio: "Expertise in frontend developement.",
    projects: ["Team Members", "Animal Database","Hassle Free Parking", "Todo Application"],
  },
  {
    id: 5,
    name: "Siva",
    role: "SDE II",
    status: "Active",
    email: "siva@gmail.com",
    bio: "Good in data structure and algorithm.",
    projects: ["Project Delta", "Project Epsilon"],
  },
];

export const roles = [...new Set(members.map((member) => member.role))];
