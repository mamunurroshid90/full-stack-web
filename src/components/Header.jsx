import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="container h-[100vh]">
      <header className="h-[100vh] max-w-[1240px] mx-auto mt-6 px-3">
        <nav className="flex w-full text-white justify-between items-center">
          <h1 className="text-4xl text-[#18CA18] font-bold">Programmer</h1>
          <ul>
            <li className="text-xl font-semibold hidden md:block">
              <a className="" href="/">
                Home
              </a>
              <a className="ml-4" href="#about">
                About
              </a>
              <a className="ml-4" href="#pages">
                Pages
              </a>
              <a className="ml-4" href="#services">
                Services
              </a>
              <a className="ml-4" href="#contact">
                Contact
              </a>
              <a className="ml-4" href="#blog">
                Blog
              </a>
              <input
                className="ml-4 px-4 bg-[#353534] border border-r-0 rounded-bl-3xl hidden md:block"
                type="search"
                placeholder="Search"
              />
              <button className="border rounded-bl-3xl rounded-tr-3xl px-4 ml-[-15px]  bg-[#18CA18]">
                Search
              </button>
            </li>
          </ul>
        </nav>
        <div className="text-white lg:flex  justify-between mt-24">
          <div className="w-[500px]">
            <h1 className="md:text-5xl text-3xl font-bold mb-5">
              Full Stack Web <br />{" "}
              <span className="text-[#18CA18]">Development</span> Courses
            </h1>
            <p className="md:text-lg text-sm w-full leading-tight">
              A full stack web developer is a person who can develop both client{" "}
              <br />
              and server software. A full stack web developer is a person who{" "}
              <br />
              can develop both client and server software
            </p>
            <button className="bg-[#18CA18] text-xl rounded-lg font-bold mt-8  px-8 py-2">
              Join us
            </button>
          </div>
          <div className="bg-[#ffffff] text-center p-5 rounded-lg hidden md:block ">
            <h3 className="text-2xl font-bold text-[#18CA18]">Login</h3>
            <form className=" text-black text-left text-lg">
              <label>User name</label> <br />
              <input className="px-6 py-1 rounded-lg bg-gray-100" type="text" />
              <br />
              <label>Password</label> <br />
              <input
                className="px-6 py-1 rounded-lg bg-gray-100"
                type="password"
              />
            </form>
            <button className="bg-[#18CA18] w-full px-2 py-1 rounded-lg my-3 text-xl font-bold">
              Login
            </button>
            <p className="text-black">
              Don't have an account?{" "}
              <span className="text-blue-600">Signup</span> here
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};
