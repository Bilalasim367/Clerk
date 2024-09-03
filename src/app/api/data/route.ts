import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) {
    return NextResponse.json({ message: "NotAuthenticated" }, { status: 401 });
  }
  return NextResponse.json(
    {
      message: "Authenticated",
      data: { userId: userId, userName: user?.username },
    },
    {
      status: 200,
    }
  );
}
//mongodb+srv://BilalAsim:<Hassan224266>@cluster0.o6cqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
