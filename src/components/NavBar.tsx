import React from "react";
import { getAuthSession } from "../lib/auth";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const NavBar = async () => {
  const session = await getAuthSession();
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="text-red-500">Next-Auth</div>

      {session?.user ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
};

export default NavBar;
