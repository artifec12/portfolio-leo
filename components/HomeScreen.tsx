import React from "react";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { ScrollArea } from "@/components/ui/scroll-area";

const HomeScreen = ({ active, setActive }: any) => {
  const renderContent = () => {
    switch (active) {
      case "Homepage":
        return <Homepage setActive={setActive} />;
      case "Projects":
        return <Projects />;
      case "About":
        return <About />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return (
          <div className="text-white h-screen w-full flex items-center justify-center">
            Page not found
          </div>
        );
    }
  };

  return (
    <main className=" lg:rounded-3xl bg-neutral-950">
      <ScrollArea className="h-screen ">
        <div className="lg:ml-6 py-6 px-4 ">{renderContent()}</div>
      </ScrollArea>
    </main>
  );
};

export default HomeScreen;
