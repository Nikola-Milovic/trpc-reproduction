import React, { useEffect } from "react";
import { trpc } from "@/trpc";

export default function Proposals() {
  console.log(trpc.hello.useQuery("hello"))
  return (
   <div>Hello</div> 
  );
}

