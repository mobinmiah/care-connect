import CaregiverCard from '@/components/CaregiverCard';
import { caregivers } from '@/data/caregivers';
import Link from 'next/link';
import React from 'react';

const TopCareGivers = () => {
      const topCaregivers = caregivers.slice(0, 3);

    return (
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background-light">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-8">
            <div>
              <h2 className="text-[#111818] text-2xl sm:text-3xl font-bold">
                Top Rated Caregivers
              </h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Vetted professionals in your area
              </p>
            </div>
            <Link
              href="/caregivers"
              className="text-primary text-sm font-bold hover:underline shrink-0"
            >
              View All
            </Link>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {topCaregivers.map((caregiver) => (
              <CaregiverCard key={caregiver.id} caregiver={caregiver} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default TopCareGivers;