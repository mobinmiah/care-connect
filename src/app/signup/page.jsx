"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [selectedSkills, setSelectedSkills] = useState(["Senior Care"]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "",
  });

  const availableSkills = [
    "Senior Care",
    "Child Care",
    "Post-Op",
    "Dementia Care",
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, skills: selectedSkills });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto flex flex-col min-h-screen">
        {/* Top Navigation */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-[#dbe6e6]/30 sticky top-0 bg-white dark:bg-background-dark z-10">
          <Link
            href="/"
            className="text-[#111818] dark:text-white flex items-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-[#111818] dark:text-white text-lg md:text-xl font-bold flex-1 text-center">
            Apply as a Caregiver
          </h2>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>

        {/* Content */}
        <div className="flex-1 px-6 md:px-10 py-10">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-4 p-4 bg-primary/10 rounded-full">
              <span className="material-symbols-outlined text-primary text-4xl">
                volunteer_activism
              </span>
            </div>

            <h2 className="text-[#111818] dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
              Join our Caregiver Community
            </h2>

            <p className="text-[#618989] dark:text-gray-400 text-base max-w-xl">
              Provide care and make a difference. Start your journey with
              CareConnect today.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111818] dark:text-white text-sm font-semibold">
                Full Name
              </label>
              <input
                className="w-full h-14 rounded-lg border border-[#dbe6e6] dark:border-[#2a4444] bg-white dark:bg-background-dark px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Enter your full name"
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111818] dark:text-white text-sm font-semibold">
                Email Address
              </label>
              <input
                className="w-full h-14 rounded-lg border border-[#dbe6e6] dark:border-[#2a4444] bg-white dark:bg-background-dark px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="name@example.com"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-[#111818] dark:text-white text-sm font-semibold">
                  Specialized Skills
                </label>
                <p className="text-[#618989] text-xs">
                  Select your areas of expertise
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {availableSkills.map((skill) => (
                  <div
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
                      selectedSkills.includes(skill)
                        ? "bg-primary text-[#111818]"
                        : "bg-[#dbe6e6]/40 dark:bg-[#2a4444] text-[#111818] dark:text-white hover:border-primary border border-transparent"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111818] dark:text-white text-sm font-semibold">
                Years of Experience
              </label>

              <input
                className="w-full h-14 rounded-lg border border-[#dbe6e6] dark:border-[#2a4444] bg-white dark:bg-background-dark px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                type="number"
                min="0"
                placeholder="e.g. 5"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-[#111818] font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-10 text-center">
            <p className="text-[#618989] text-sm">
              Already have an account?
              <Link
                href="/login"
                className="text-primary font-bold hover:underline ml-1"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="mt-auto py-8 flex flex-col items-center opacity-40">
          <div className="flex gap-2 items-center mb-4">
            <span className="material-symbols-outlined text-sm text-[#618989]">
              shield
            </span>
            <span className="text-[#618989] text-xs">Secure & Encrypted</span>
          </div>
          <div className="h-1 w-24 bg-[#dbe6e6] dark:bg-[#2a4444] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
