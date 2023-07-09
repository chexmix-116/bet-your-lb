import * as React from "react";
import { Header } from "./header";

export interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
