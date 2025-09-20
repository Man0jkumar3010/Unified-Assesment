import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const MemberViewList = ({ member }) => {
  const { id, name, role, bio, email, projects, status } = member;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-md mx-auto shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 rounded-2xl cursor-pointer">
        <CardHeader className="pb-2 card-container">
          <div>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-30 rounded-xl object-cover bg-gray-200"
            />
          </div>
          <div className="flex items-center space-x-3 mt-3">
            <div>
              <CardTitle className="text-lg font-semibold ">{name}</CardTitle>
              <CardDescription className="text-sm text-gray-600 space-y-2">
                <p>{role}</p>
                <div
                  className={`w-fit text-xs font-medium rounded-xl px-4 py-2 ${
                    status === "Active"
                      ? "bg-green-400 text-white"
                      : "bg-red-500 text-white"
                    }`}
                  style={{padding:"2px",marginTop:"5px"}}
                >
                  {status}
                </div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardFooter>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-slate-700 hover:bg-slate-500 w-25 rounded-2xl text-white px-4 py-2 card-container  transition-transform duration-300 hover:scale-95 shadow-md"
              >
                View Detail
              </Button>
            </DialogTrigger>
            <DialogContent
              className=" sm:max-w-md bg-white rounded-2xl shadow-lg p-2
              transition-all duration-300 ease-in-out 
              data-[state=open]:animate-fadeIn 
              data-[state=closed]:animate-fadeOut"
              style={{ padding: "20px" }}
            >
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  Member Details
                </DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="profile" className="w-[400px] mt-4">
                <TabsList className="grid w-full grid-cols-2 rounded-xl bg-gray-100 p-1">
                  <TabsTrigger
                    value="profile"
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-white rounded-lg transition-colors"
                  >
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-white rounded-lg transition-colors"
                  >
                    Projects
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-4 space-y-2">
                  <p>
                    <span className="font-semibold">Bio:</span> {bio}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {email}
                  </p>
                  <p>
                    <span className="font-semibold">Project Count:</span>{" "}
                    {projects.length}
                  </p>
                </TabsContent>
                <TabsContent value="projects" className="mt-4">
                  <ul className="list-disc list-inside space-y-1">
                    {projects.map((project, index) => (
                      <li key={`${id}-${index}`} className="text-gray-700">
                        {project}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};
