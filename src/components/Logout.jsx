import React from "react";
import Button from "./Button";
import { doLogout } from "@/app/actions";

const Logout = ({ className = "" }) => {
  return (
    <form action={doLogout} className={className}>
      <Button type="submit" placeholder="Logout button">
        Logout
      </Button>
    </form>
  );
};

export default Logout;
