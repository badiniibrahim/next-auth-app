"use client";

import { signIn } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="bg-white text-black rounded-[20px]"
    >
      Log in
    </button>
  );
};

export default LoginButton;
