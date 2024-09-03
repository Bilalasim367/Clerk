import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import { redirect } from "next/navigation";
import { UserProfile } from "@clerk/nextjs";

const Profile = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();
  if (!isAuth) {
    redirect("/");
    NEXT_REDIRECT;
  }
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <h1 className="text-2xl">{user?.username}</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;
