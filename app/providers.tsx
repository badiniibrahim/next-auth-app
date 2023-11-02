"use client";
import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

export type LayoutProvidersProps = PropsWithChildren;

export const LayoutProviders = (props: LayoutProvidersProps) => {
  return <SessionProvider> {props.children} </SessionProvider>;
};
