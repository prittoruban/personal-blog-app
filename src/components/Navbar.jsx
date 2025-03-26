"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  IconHome,
  IconArticle,
  IconUser,
  IconMenu2,
  IconChevronDown,
  IconMailFilled,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

// Improved Portal component with AnimatePresence
function Portal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Set active link based on current path
    setActiveLink(window.location.pathname);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('button[aria-label="Toggle mobile menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Close on escape key
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4" />,
      description: "Welcome to my portfolio",
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <IconArticle className="h-4 w-4" />,
      description: "My thoughts and insights",
      badge: "New",
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4" />,
      description: "Learn about me",
    },
  ];

  return (
    <TooltipProvider>
      <div className="fixed left-0 top-0 w-full z-50 flex justify-center pt-6 md:pt-4 transition-all duration-300">
        <div className="w-full max-w-7xl px-4 flex justify-center">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
              "relative w-full rounded-2xl backdrop-blur-xl transition-all duration-300",
              isScrolled
                ? "bg-background/90 shadow-lg shadow-black/5 border border-border/40"
                : "bg-background/50"
            )}
          >
            <div className="h-16 flex items-center justify-between px-4 md:px-6">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/90 to-primary-foreground/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-background font-bold text-lg">PR</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold hidden md:block">
                    Pritto Ruban
                  </span>
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                {navItems.map((item) => {
                  const isActive = activeLink === item.link;
                  return (
                    <Tooltip
                      key={item.name}
                      content={item.description}
                      side="bottom"
                    >
                      <Link
                        href={item.link}
                        className={cn(
                          "relative text-sm flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-200",
                          isActive
                            ? "text-foreground bg-primary/10 font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                        )}
                        onClick={() => setActiveLink(item.link)}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        {item.badge && (
                          <Badge
                            variant="outline"
                            className="text-xs py-0 h-5 bg-primary/10 border-primary/20 text-primary"
                          >
                            {item.badge}
                          </Badge>
                        )}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary mx-3 rounded-t-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Link>
                    </Tooltip>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-4 relative">
                <div className="flex items-center gap-2">
                  <Tooltip content="GitHub" side="bottom">
                    <Link
                      href="https://github.com/yourusername"
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <IconBrandGithub className="h-5 w-5 text-muted-foreground" />
                      </Button>
                    </Link>
                  </Tooltip>
                  <Tooltip content="LinkedIn" side="bottom">
                    <Link
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <IconBrandLinkedin className="h-5 w-5 text-muted-foreground" />
                      </Button>
                    </Link>
                  </Tooltip>
                </div>

                <Link href="/contact">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-9"
                    size="sm"
                  >
                    <IconMailFilled className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </Link>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <IconMenu2 className="h-5 w-5" />
              </Button>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  ref={mobileMenuRef}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden bg-background/95 backdrop-blur-lg rounded-b-2xl overflow-hidden"
                >
                  <div className="px-4 py-4 space-y-2">
                    {navItems.map((item) => {
                      const isActive = activeLink === item.link;
                      return (
                        <Link
                          key={item.name}
                          href={item.link}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                            isActive
                              ? "bg-primary/10 text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                          )}
                          onClick={() => {
                            setActiveLink(item.link);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center",
                              isActive ? "bg-primary/20" : "bg-accent"
                            )}
                          >
                            {item.icon}
                          </div>
                          <div className="flex flex-col">
                            <span>{item.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                          {item.badge && (
                            <Badge
                              variant="outline"
                              className="ml-auto text-xs py-0 h-5 bg-primary/10 border-primary/20 text-primary"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      );
                    })}

                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      <div className="flex justify-between px-4">
                        <Link
                          href="https://github.com/yourusername"
                          target="_blank"
                        >
                          <Button variant="outline" size="icon">
                            <IconBrandGithub className="h-5 w-5" />
                          </Button>
                        </Link>
                        <Link
                          href="https://linkedin.com/in/yourusername"
                          target="_blank"
                        >
                          <Button variant="outline" size="icon">
                            <IconBrandLinkedin className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>

                      <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button
                          className="w-full bg-primary text-primary-foreground"
                          size="lg"
                        >
                          <IconMailFilled className="h-5 w-5 mr-2" />
                          Contact Me
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </div>
    </TooltipProvider>
  );
}
