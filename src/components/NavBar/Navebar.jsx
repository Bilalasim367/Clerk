import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function Navbar() {
  const { userId } = auth();
  return (
    <>
      <div className="bg-slate-800 rounded-b-xl">
        <ul className="flex justify-between py-4 px-6 text-white">
          <div>
            <Link href="/">
              {" "}
              <li>Home</li>
            </Link>
          </div>
          <div>
            <Link href="/client">
              {" "}
              <li>Client page</li>
            </Link>
          </div>
          <div className="flex gap-6 items-center">
            {!userId ? (
              <>
                <Link href="/sign-up">
                  <li>SignUp</li>
                </Link>
                <Link href="/sign-in">
                  <li>SignIn</li>
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile">
                  <li>Profile</li>
                </Link>

                <li className="flex items-center">
                  <UserButton />
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}
