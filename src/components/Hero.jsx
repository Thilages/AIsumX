import React from "react";
import Editor from "./Editor";

const Hero = () => {
  return (
    <main className="flex-col w-screen">
      <div className="w-screen px-6  hero">
        <div className="shadow flex w-full flex-col text-center items-center justify-center bg-slate-300 bg-opacity-20 p-7 rounded-xl ">
          <div className="max-w-4xl">
            <h2 className="font-black text-3xl title text-center ">
              Simplify info with SummarAI
            </h2>
            <h2 className="font-black text-3xl title text-center">
              AI-powered quick, clear summaries
            </h2>
            <p className="mt-6 para">
              Simplify your content writing with our text summary generator.
              Transform your paragraphs, articles, and other long text into
              digestible and engaging copy in one click
            </p>
          </div>
          <Editor />
        </div>
      </div>
    </main>
  );
};

export default Hero;
