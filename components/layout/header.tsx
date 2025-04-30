"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Motherhood Stories
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              Home
            </Link>
            <Link href="/#stories" className="text-sm font-medium hover:text-primary transition">
              Stories
            </Link>
            <Link href="/#health" className="text-sm font-medium hover:text-primary transition">
              Health
            </Link>
            <Link href="/#inspiration" className="text-sm font-medium hover:text-primary transition">
              Inspiration
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#stories" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Stories
            </Link>
            <Link 
              href="/#health" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Health
            </Link>
            <Link 
              href="/#inspiration" 
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Inspiration
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}