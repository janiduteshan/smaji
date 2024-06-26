import React from "react";

import { DefaultSidebar } from "./sidebar";

function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <DefaultSidebar />

      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Code Snippet Library</h1>
            <p className="mb-5">
              Unlock Efficiency: Your One-stop Shop for Code Solutions!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
