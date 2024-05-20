import Link from "next/link";
import { authUserSession } from "@/libs/auth-lib";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign out" : "Sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between items-center mt-2 md:mt-0 gap-4">
      {user && <Link href="/users/dashboard">Dashboard</Link>}
      <Link href={actionURL} className="bg-accent py-2 px-6 rounded-full">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
