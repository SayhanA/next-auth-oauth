"use client";

import { doCredentialLogin } from "@/app/actions";
import Input from "./Input";
import Button from "./Button";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
      } else {
        router.push("/home");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
      <Input type="email" name="email" id="email" placeholder="Eamil" />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <Button type="submit" className="border py-2">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
