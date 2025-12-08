import React from 'react'
import { redirect } from "next/navigation";
import Reviews from "./reviews";
import { auth } from "@/auth";

const page = async () => {

  //this is to protect the reviews route
  const session = await auth();
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <Reviews session={session}/>
    </main>
  )
}

export default page
