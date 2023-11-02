"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button onClick={() => signOut()} className="bg-white text-black">
      Logout
    </button>
  );
};

export default LogoutButton;
