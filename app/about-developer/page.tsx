import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen pt-48">
      <Link href={"https://www.wheelbirth.dev"}>
        <p className="text-center font-semibold">
          {" "}
          About the Developer: Wilbert Tanglao
        </p>
        <p className="text-left text-sm pt-10 w-1/3 mx-auto">
          Wilbert is a software engineer with a knack for crafting seamless
          digital experiences. With 10+ years in the tech industry, he
          specializes in building scalable web applications using modern tools
          like React, Node.js, Java Spring Boot and ASP.NET Core. Wilbert is
          passionate about solving complex problems and creating intuitive
          solutions that make life easier for users. When he is not immersed in
          code, you’ll find him experimenting with new technologie and designing
          side projects.
        </p>
      </Link>
    </div>
  );
};

export default page;
