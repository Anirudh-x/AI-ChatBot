import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayouts = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="py-[1rem] px-[4rem] h-[100vh] flex flex-col">
        <header className="flex items-start justify-between">
          <Link to="/" className="flex items-center font-bold gap-2">
            <img
              src="/logo.png"
              alt=""
              className="h-9 w-9 bg-white rounded-[50%]"
            />
            <span>AI ChatBot</span>
          </Link>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main className=" flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayouts;
