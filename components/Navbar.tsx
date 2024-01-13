"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();
  const logo = "/images/Logo.svg";
  const VetSolutions = "/images/vetsolutions.svg";
  const links = [
    { text: "HOME", href: "/" },
    { text: "SOBRE NÓS", href: "/sobre-nos" },
    { text: "O QUE OFERECEMOS", href: "/o-que-oferecemos" },
    { text: "NOSSO DIFERENCIAL", href: "/nosso-diferencial" },
    { text: "PLANOS", href: "/planos" },
    { text: "BLOG", href: "/blog" },
  ];

  // Fechar o menu ao clicar fora dele
  // useEffect(() => {
  //   function handleClickOutside(event: () => void): void {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setIsMenuOpen(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [ref]);

  return (
    <header className="w-full sticky top-0 z-50 px-6 flex items-center bg-[#1E1E1E]/75 h-[80px] md:px-24">
      {/* Ícone do Hambúrguer */}
      <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg viewBox="0 0 100 80" width="40" height="40" fill="#FFFFFF">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>

      {/* Logo */}
      <div className="flex-grow flex justify-center">
        <Image width={48} height={60} src={logo} alt="logo" />
        <Image width={200} height={80} src={VetSolutions} alt="vetSolutions" />
      </div>

      {/* Links da Navbar */}
      <div className="hidden md:flex text-white gap-8 text-xs justify-end items-center flex-grow">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <span className="cursor-pointer">{link.text}</span>
          </Link>
        ))}
        <Button className="bg-purple text-mint font-semibold hover:underline rounded-full hover:bg-purple/75">
          Entre em contato
        </Button>
      </div>

      {/* Sidebar para Mobile */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-[#1E1E1E]/75 p-4 w-64 h-full md:hidden z-50`}
        // ref={ref}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#FFFFFF">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col text-white space-y-4 mt-10">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="py-2 text-lg cursor-pointer">{link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
