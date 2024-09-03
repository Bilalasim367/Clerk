"use client";
import { useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen text-2xl">
      Hello, {user.firstName} welcome to Clerk
    </div>
  );
}
