import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="font-work-sans bg-white px-5 py-3 shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/assets/logo.png"} alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
              >
                <button type="submit">Sign Out</button>
              </form>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">
                <span>Sign In</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
