import CaregiverCard from '@/components/CaregiverCard';
import { caregivers } from '@/data/caregivers';
import Link from 'next/link';
import React from 'react';

const TopCareGivers = () => {
      const topCaregivers = caregivers.slice(0, 3);

    return (
      <section className="py-12 bg-white">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-[#111818] text-2xl font-bold">
                Top Rated Caregivers
              </h2>
              <p className="text-slate-500 text-sm">
                Vetted professionals in your area
              </p>
            </div>
            <Link
              href="/caregivers"
              className="text-primary text-sm font-bold hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {topCaregivers.map((caregiver) => (
              <CaregiverCard key={caregiver.id} caregiver={caregiver} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default TopCareGivers;