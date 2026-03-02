"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  experience: "",
  cuisines: "",
  bulkCooking: "",
  foodSafety: "",
  workingHours: "",
  weekends: "",
  workdays: "",
  healthStatus: "",
  medicalCondition: "",
  salary: "",
  reference: "",
};

function FormContent({ onClose }) {
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Thank you for joining the waitlist!");
    setFormData(initialFormData);
    onClose();
  };

  const inputCls =
    "bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-base h-11";
  const labelCls = "text-amber-700 dark:text-amber-200 text-sm font-medium";
  const sectionCls =
    "text-base font-semibold text-amber-700 dark:text-amber-200 pt-3 border-t border-amber-200 dark:border-amber-700 mt-1";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 overflow-y-auto overscroll-contain flex-1 pr-1"
      style={{ maxHeight: "calc(90vh - 140px)" }}
    >
      {/* ── Personal Information ── */}
      <h3 className={sectionCls}>Personal Information</h3>

      <div className="space-y-1.5">
        <Label htmlFor="name" className={labelCls}>
          Full Name
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          placeholder="Enter your full name"
          required
          className={inputCls}
          autoComplete="name"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className={labelCls}>
          Contact Number
        </Label>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
          placeholder="Enter your contact number"
          required
          className={inputCls}
          autoComplete="tel"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className={labelCls}>
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          inputMode="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="Enter your email"
          required
          className={inputCls}
          autoComplete="email"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="address" className={labelCls}>
          Address (Optional)
        </Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => updateFormData("address", e.target.value)}
          placeholder="Enter your address"
          className={inputCls}
          autoComplete="street-address"
        />
      </div>

      {/* ── Cooking Experience ── */}
      <h3 className={sectionCls}>Cooking Experience</h3>

      <div className="space-y-1.5">
        <Label className={labelCls}>
          How many years of cooking experience do you have?
        </Label>
        <Select
          value={formData.experience}
          onValueChange={(v) => updateFormData("experience", v)}
        >
          <SelectTrigger className={inputCls}>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-[200]" sideOffset={4}>
            <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
            <SelectItem value="1-3 years">1-3 years</SelectItem>
            <SelectItem value="3-5 years">3-5 years</SelectItem>
            <SelectItem value="More than 5 years">More than 5 years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="cuisines" className={labelCls}>
          What types of food are you familiar with?
        </Label>
        <Input
          id="cuisines"
          value={formData.cuisines}
          onChange={(e) => updateFormData("cuisines", e.target.value)}
          placeholder="e.g. Indian, Continental"
          className={inputCls}
        />
      </div>

      <div className="space-y-1.5">
        <Label className={labelCls}>
          Are you comfortable cooking in large quantities?
        </Label>
        <Select
          value={formData.bulkCooking}
          onValueChange={(v) => updateFormData("bulkCooking", v)}
        >
          <SelectTrigger className={inputCls}>
            <SelectValue placeholder="Select yes/no" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-[200]" sideOffset={4}>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label className={labelCls}>
          Do you have experience with food safety and hygiene?
        </Label>
        <Select
          value={formData.foodSafety}
          onValueChange={(v) => updateFormData("foodSafety", v)}
        >
          <SelectTrigger className={inputCls}>
            <SelectValue placeholder="Select yes/no" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-[200]" sideOffset={4}>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ── Availability ── */}
      <h3 className={sectionCls}>Availability</h3>

      <div className="space-y-1.5">
        <Label htmlFor="working-hours" className={labelCls}>
          Preferred Working Hours (e.g., 6 AM – 11 AM)
        </Label>
        <Input
          id="working-hours"
          value={formData.workingHours}
          onChange={(e) => updateFormData("workingHours", e.target.value)}
          placeholder="Enter preferred hours"
          className={inputCls}
        />
      </div>

      <div className="space-y-1.5">
        <Label className={labelCls}>
          Are you available to work on weekends?
        </Label>
        <Select
          value={formData.weekends}
          onValueChange={(v) => updateFormData("weekends", v)}
        >
          <SelectTrigger className={inputCls}>
            <SelectValue placeholder="Select yes/no" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-[200]" sideOffset={4}>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="workdays" className={labelCls}>
          How many days per week are you available?
        </Label>
        <Input
          id="workdays"
          type="number"
          inputMode="numeric"
          value={formData.workdays}
          onChange={(e) => updateFormData("workdays", e.target.value)}
          placeholder="Enter number of days"
          min="1"
          max="7"
          className={inputCls}
        />
      </div>

      {/* ── Health & Safety ── */}
      <h3 className={sectionCls}>Health & Safety</h3>

      <div className="space-y-1.5">
        <Label className={labelCls}>
          Are you physically fit to work in a kitchen environment?
        </Label>
        <Select
          value={formData.healthStatus}
          onValueChange={(v) => updateFormData("healthStatus", v)}
        >
          <SelectTrigger className={inputCls}>
            <SelectValue placeholder="Select yes/no" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-[200]" sideOffset={4}>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label className={labelCls}>
          Do you have any medical conditions or allergies?
        </Label>
        <Select
          value={formData.medicalCondition}
          onValueChange={(v) => updateFormData("medicalCondition", v)}
        >
          <SelectTrigger className={inputCls}>
            <SelectValue placeholder="Select yes/no" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-[200]" sideOffset={4}>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ── Salary Expectations ── */}
      <h3 className={sectionCls}>Salary Expectations</h3>

      <div className="space-y-1.5">
        <Label htmlFor="salary" className={labelCls}>
          Expected daily/monthly salary?
        </Label>
        <Input
          id="salary"
          inputMode="numeric"
          value={formData.salary}
          onChange={(e) => updateFormData("salary", e.target.value)}
          placeholder="Enter expected salary"
          required
          className={inputCls}
        />
      </div>

      {/* ── References ── */}
      <h3 className={sectionCls}>References (Optional)</h3>

      <div className="space-y-1.5">
        <Label htmlFor="reference" className={labelCls}>
          Reference who can vouch for your cooking skills
        </Label>
        <Input
          id="reference"
          value={formData.reference}
          onChange={(e) => updateFormData("reference", e.target.value)}
          placeholder="Enter reference details"
          className={inputCls}
        />
      </div>

      <DialogFooter className="pt-4 pb-2">
        <Button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-full h-11 text-base font-semibold"
        >
          Submit Application
        </Button>
      </DialogFooter>
    </form>
  );
}

function FormDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-amber-50 dark:bg-amber-900 p-4 sm:p-6 w-[95vw] max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl max-h-[90vh] flex flex-col">
        <DialogHeader className="mb-3">
          <DialogTitle className="text-amber-800 dark:text-amber-100 text-lg font-bold">
            Join Our Culinary Community
          </DialogTitle>
          <DialogDescription className="text-amber-600 dark:text-amber-300 text-sm">
            Fill out the form to apply as a Food Angel.
          </DialogDescription>
        </DialogHeader>

        <FormContent onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

// ─────────────────────────────────────────────
// Usage 1: "Become a Food Angel" button (self-contained)
// ─────────────────────────────────────────────
export function BecomeAFoodAngel() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-amber-600 text-white text-sm font-bold hover:bg-amber-700 transition-colors rounded-full"
      >
        Become a Food Angel
      </Button>
      <FormDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

// ─────────────────────────────────────────────
// Usage 2: Controlled from outside (Join as Mom)
// ─────────────────────────────────────────────
export function JoinAsMomDialog({ open, onOpenChange }) {
  return <FormDialog open={open} onOpenChange={onOpenChange} />;
}

// Default export for backward compatibility
export default BecomeAFoodAngel;
