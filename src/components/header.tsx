import * as React from "react";

import logo from "../../public/images/b.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <header className="flex justify-between container py-4 z-50 fixed w-full max-w-none">
      <Link href="/">
        <Image
          src={logo}
          alt="Bet Your Pound Logo; Click to navigate to home"
          width={40}
          height={40}
        />
      </Link>

      <div className="space-x-4">
        <Button asChild>
          <Link href="/register">Sign Up</Link>
        </Button>

        <Button asChild variant='link'>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
