"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import ProjectCard from "@/app/components/ProjectCard";
import { getAllProjects } from "../../../function/getAllprojects";

export default function ProjectsPageWrapper() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [projects, setProjects] = useState([]);

  // İlk yükleme: projeleri getir
  useMemo(() => {
    getAllProjects().then(setProjects);
  }, []);

  const categories = useMemo(() => {
    const all = projects.map((p) => p.category || "Uncategorized");
    return ["All", ...new Set(all)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, selectedCategory]);

  return (
    <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16 px-4">
      <Link
        href="/"
        className="flex items-center space-x-2 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <MdOutlineKeyboardBackspace className="text-xl" />
        <span>Back to Home</span>
      </Link>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

       
      </div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">
            No projects found.
          </p>
        )}
      </motion.div>
    </section>
  );
}
