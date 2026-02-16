"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import CaregiverCard from "@/components/CaregiverCard";
import { caregivers } from "@/data/caregivers";

export default function CaregiversPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");

  const skills = ["All", "Senior Care", "Child Care", "Post-Op", "Special Needs", "Dementia Care"];

  const filteredCaregivers = caregivers.filter((caregiver) => {
    const matchesSearch = caregiver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caregiver.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkill = selectedSkill === "All" || caregiver.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  return (
    <>
      <Header />

      <div className="min-h-screen bg-background-light pb-24">
        {/* Search Header */}
        <div className="bg-white border-b border-slate-100 p-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-[#111818] mb-4">Find a Caregiver</h1>
            
            {/* Search Bar */}
            <div className="relative mb-4">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Skill Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedSkill === skill
                      ? "bg-primary text-[#111818]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Caregivers List */}
        <div className="max-w-5xl mx-auto p-4">
          <p className="text-slate-500 text-sm mb-4">
            {filteredCaregivers.length} caregiver{filteredCaregivers.length !== 1 ? "s" : ""} found
          </p>
          <div className="space-y-4">
            {filteredCaregivers.map((caregiver) => (
              <CaregiverCard key={caregiver.id} caregiver={caregiver} />
            ))}
          </div>

          {filteredCaregivers.length === 0 && (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">search_off</span>
              <p className="text-slate-500">No caregivers found matching your criteria</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  );
}
