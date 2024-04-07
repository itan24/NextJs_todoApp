import React from "react";
import { InputField } from "../inputField";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ArrowBack } from "@mui/icons-material";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8">
      <div>
        <Link href="http://localhost:3000">
          <ArrowBack className="size-12 text-black opacity-65 hover:opacity-95" />
        </Link>
      </div>
      <div
        className="flex flex-col items-center mt-10 border-black border-opacity-40 rounded-2xl bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-15  w-auto"
        style={{
          border: "2px solid black", // Adjust border properties as needed
          padding: "20px", // Adjust padding as needed
        }}
      >
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Update Task - {params.id}
        </h1>
        <InputField text="update" id={Number(params.id)} />
      </div>
    </main>
  );
};

export default Page;
