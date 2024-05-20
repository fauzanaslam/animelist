import React from "react";
import { authUserSession } from "@/libs/auth-lib";
import Image from "next/image";

const Page = async () => {
  const user: any = await authUserSession();
  return (
    <div className="pt-44 md:pt-24">
      <h3>Dashboard page</h3>
      <h4>welcome {user?.name}</h4>
      <Image src={user?.image} alt="..." width={250} height={250} />
    </div>
  );
};

export default Page;
