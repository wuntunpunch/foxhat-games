"use client";

import { useState } from "react";
import { Gamepad2 } from "lucide-react";
import Logo from "./components/logo";

export default function Home() {
  const [leftCardFlipped, setLeftCardFlipped] = useState(false);
  const [rightCardFlipped, setRightCardFlipped] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#023047] p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Foxhat Games</h1>
        <Logo />
      </div>

      <div className="flex gap-8">
        <div
          className="perspective-1000"
          onClick={() => setLeftCardFlipped(!leftCardFlipped)}
        >
          <div
            className={`relative w-48 h-64 transition-transform duration-500 transform-style-3d ${
              leftCardFlipped ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full backface-hidden">
              <div className="w-full h-full bg-[#FB8500] rounded-xl border-4 border-white flex items-center justify-center">
                <Gamepad2 size={64} className="text-white" />
              </div>
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <span className="text-4xl font-bold text-[#023047]">
                  Coming
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="perspective-1000"
          onClick={() => setRightCardFlipped(!rightCardFlipped)}
        >
          <div
            className={`relative w-48 h-64 transition-transform duration-500 transform-style-3d ${
              rightCardFlipped ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full backface-hidden">
              <div className="w-full h-full bg-[#FB8500] rounded-xl border-4 border-white flex items-center justify-center">
                <Gamepad2 size={64} className="text-white" />
              </div>
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <span className="text-4xl font-bold text-[#023047]">Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
