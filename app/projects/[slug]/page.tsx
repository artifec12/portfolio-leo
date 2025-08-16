"use client";

import React, { use, useEffect, useState } from "react";
import ProjectComp from "@/components/ProjectComp";

const Home = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params); // ✅ unwrap the params Promise
  return (
    <div className="flex-1 overflow-y-auto">
      <ProjectComp slug={slug} /> {/* ✅ Pass unwrapped slug */}
    </div>
  );
};

export default Home;
