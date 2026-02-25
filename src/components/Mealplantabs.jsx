import React from "react";
import { cn } from "@/lib/utils";

const MealPlanTabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Weekly", "Monthly", "Combo Pack"];

  return (
    <div className="flex justify-center mb-6 px-4">
      <div className="inline-flex bg-white rounded-full shadow-md p-1 gap-1 w-full sm:w-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab.toLowerCase().replace(" ", "-"))}
            className={cn(
              "flex-1 sm:flex-none px-3 sm:px-7 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-lg whitespace-nowrap",
              activeTab === tab.toLowerCase().replace(" ", "-")
                ? "bg-new text-white shadow-lg"
                : "text-gray-600 hover:text-new hover:bg-new/5",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealPlanTabs;
