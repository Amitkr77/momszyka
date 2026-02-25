export const ALL_MEALS = [
  // ── WEEKLY ──────────────────────────────────────────────────────────────────
  {
    type: "Chapati & Rice Weekly Plan",
    image: "/plan/veg_1.jpg",
    badges: ["Fresh ingredients", "Home-style cooking", "Hygienic packaging"],
    meals: 7,
    description:
      "Complete thali with rice, 2 chapatis, dal, seasonal vegetables, salad, curd & pickle - One meal per day",
    price: 600,
    pricePerMeal: 86,
    planType: "Weekly",
    dietType: "veg",
  },
  {
    type: "Veg Rice Weekly Plan",
    image: "/plan/rice_dal.jpg",
    badges: ["Low calorie", "Fresh ingredients", "Nutritionist approved"],
    meals: 7,
    description:
      "Full Thali with rice, dal, seasonal vegetables, salad, curd & pickle - One meal per day",
    price: 600,
    pricePerMeal: 86,
    planType: "Weekly",
    dietType: "veg",
  },
  {
    type: "Veg Chapati Weekly Plan",
    image: "/plan/roti_sabji.jpg",
    badges: ["Low calorie", "Nutritionist approved", "Fresh ingredients"],
    meals: 7,
    description:
      "Thali with 6 chapatis, dal, seasonal vegetables, salad, curd & pickle - One meal per day",
    price: 600,
    pricePerMeal: 86,
    planType: "Weekly",
    dietType: "veg",
  },

  // ── MONTHLY ─────────────────────────────────────────────────────────────────
  {
    type: "Chapati & Rice Monthly Plan",
    image: "/plan/veg_1.jpg",
    badges: ["Fresh ingredients", "Home-style cooking", "Hygienic packaging"],
    meals: 30,
    description:
      "Complete thali with rice, 2 chapatis, dal, seasonal vegetables, salad, curd & pickle - One meal per day",
    price: 2500,
    pricePerMeal: 83,
    planType: "Monthly",
    dietType: "veg",
  },
  {
    type: "Veg Rice Monthly Plan",
    image: "/plan/rice_dal.jpg",
    badges: ["Low calorie", "Fresh ingredients", "Nutritionist approved"],
    meals: 30,
    description:
      "Full Thali with rice, dal, seasonal vegetables, salad, curd & pickle - One meal per day",
    price: 2500,
    pricePerMeal: 83,
    planType: "Monthly",
    dietType: "veg",
  },
  {
    type: "Veg Chapati Monthly Plan",
    image: "/plan/roti_sabji.jpg",
    badges: ["Premium quality", "Extra items", "Home-style cooking"],
    meals: 30,
    description:
      "Thali with 6 chapatis, dal, seasonal vegetables, salad, curd & pickle - One meal per day",
    price: 2500,
    pricePerMeal: 83,
    planType: "Monthly",
    dietType: "veg",
  },

  // ── COMBO ────────────────────────────────────────────────────────────────────
  {
    type: "Chapati & Rice Weekly Combo",
    image: "/plan/veg_1.jpg",
    badges: [
      "Fresh ingredients",
      "Home-style cooking",
      "Hygienic packaging",
      "Best Value",
    ],
    meals: 14,
    description:
      "Complete thali with rice, 2 chapatis, dal, seasonal vegetables, salad, curd & pickle - Two meals per day (Lunch & Dinner)",
    price: 1200,
    pricePerMeal: 86,
    planType: "Combo",
    dietType: "veg",
  },
  {
    type: "Chapati & Rice Monthly Combo",
    image: "/plan/veg_1.jpg",
    badges: [
      "Fresh ingredients",
      "Home-style cooking",
      "Hygienic packaging",
      "Best Value",
    ],
    meals: 60,
    description:
      "Complete thali with rice, 2 chapatis, dal, seasonal vegetables, salad, curd & pickle - Two meals per day (Lunch & Dinner)",
    price: 4000,
    pricePerMeal: 67,
    planType: "Combo",
    dietType: "veg",
  },
  {
    type: "Veg Rice Weekly Combo",
    image: "/plan/rice_dal.jpg",
    badges: [
      "Low calorie",
      "Fresh ingredients",
      "Nutritionist approved",
      "Best Value",
    ],
    meals: 14,
    description:
      "Full Thali with rice, dal, seasonal vegetables, salad, curd & pickle - Two meals per day (Lunch & Dinner)",
    price: 1200,
    pricePerMeal: 86,
    planType: "Combo",
    dietType: "veg",
  },
  {
    type: "Veg Chapati Weekly Combo",
    image: "/plan/roti_sabji.jpg",
    badges: [
      "Low calorie",
      "Nutritionist approved",
      "Fresh ingredients",
      "Best Value",
    ],
    meals: 14,
    description:
      "Thali with 6 chapatis, dal, seasonal vegetables, salad, curd & pickle - Two meals per day (Lunch & Dinner)",
    price: 1200,
    pricePerMeal: 86,
    planType: "Combo",
    dietType: "veg",
  },
  {
    type: "Veg Rice Monthly Combo",
    image: "/plan/rice_dal.jpg",
    badges: [
      "Fresh ingredients",
      "Home-style cooking",
      "Hygienic packaging",
      "Best Value",
    ],
    meals: 60,
    description:
      "Full Thali with rice, dal, seasonal vegetables, salad, curd & pickle - Two meals per day (Lunch & Dinner)",
    price: 4000,
    pricePerMeal: 67,
    planType: "Combo",
    dietType: "veg",
  },
  {
    type: "Veg Chapati Monthly Combo",
    image: "/plan/roti_sabji.jpg",
    badges: [
      "Fresh ingredients",
      "Home-style cooking",
      "Hygienic packaging",
      "Best Value",
    ],
    meals: 60,
    description:
      "Thali with 6 chapatis, dal, seasonal vegetables, salad, curd & pickle - Two meals per day (Lunch & Dinner)",
    price: 4000,
    pricePerMeal: 67,
    planType: "Combo",
    dietType: "veg",
  },
];

/** All plan types in display order */
export const PLAN_TYPES = ["Weekly", "Monthly", "Combo"];

/** Meals grouped by planType — used by MealSpecialsSection (tab key = lowercase) */
export const MEALS_BY_PLAN = {
  weekly: ALL_MEALS.filter((m) => m.planType === "Weekly"),
  monthly: ALL_MEALS.filter((m) => m.planType === "Monthly"),
  "combo-pack": ALL_MEALS.filter((m) => m.planType === "Combo"),
};

/** Meals grouped by dietType — used by FullMenuSection diet view */
export const MEALS_BY_DIET = {
  veg: ALL_MEALS.filter((m) => m.dietType === "veg"),
  "non-veg": ALL_MEALS.filter((m) => m.dietType === "non-veg"),
};

/** Visual config per plan type */
export const PLAN_META = {
  Weekly: {
    label: "Weekly Plans",
    gradient: "from-emerald-500 to-green-600",
    pillActive: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    icon: "🥗",
  },
  Monthly: {
    label: "Monthly Plans",
    gradient: "from-amber-500 to-orange-500",
    pillActive: "bg-amber-50 text-amber-700 border border-amber-200",
    icon: "📅",
  },
  Combo: {
    label: "Combo Packs",
    gradient: "from-rose-500 to-pink-500",
    pillActive: "bg-rose-50 text-rose-700 border border-rose-200",
    icon: "🎁",
  },
};
