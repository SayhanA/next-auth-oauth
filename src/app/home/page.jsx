import { auth } from "@/auth";
import Logout from "@/components/Logout";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();
  console.log(session);

  if (!session?.user) redirect("/");

  return (
    <div className="w-fit border mx-auto">
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <Logout className="border-2 px-3 py-2 rounded-md w-fit mx-auto my-5 text-gray-400 font-bold border-gray-400 hover:border-gray-600 hover:text-gray-600 transition-all hover:shadow-xl" />
    </div>
  );
};

export default HomePage;
