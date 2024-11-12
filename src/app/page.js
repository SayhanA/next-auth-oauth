import LoginForm from "@/components/LoginForm";
import Logout from "@/components/Logout";
import SocialLogin from "@/components/SocialLogin";

export default function Home() {
  return (
    <main className="w-fit border mx-auto flex flex-col gap-5 rounded-xl p-5">
      <p className="text-center text-2xl font-bold text-gray-400">
        Sign In Now
      </p>
      <LoginForm />
      <SocialLogin />
    </main>
  );
}
