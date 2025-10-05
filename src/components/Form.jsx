import React, { useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Form() {
  const [open, setOpen] = useState(false);
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
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Thank you for joining the waitlist!");
    setOpen(false);
    setFormData(initialFormData);
  };

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-amber-600 text-white text-sm font-bold hover:bg-amber-700 transition-colors rounded-full">
          Become a Food Angel
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-amber-50 dark:bg-amber-900 rounded-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-amber-800 dark:text-amber-100 text-base sm:text-lg">
            Join Our Culinary Community
          </DialogTitle>
          <DialogDescription className="text-amber-600 dark:text-amber-300 text-sm sm:text-base">
            Fill out the form to apply as a Food Angel.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[70vh] sm:max-h-[80vh]">
          {/* Personal Information Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 dark:text-amber-200">
              Personal Information
            </h3>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Full Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              placeholder="Enter your full name"
              required
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Contact Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              placeholder="Enter your contact number"
              required
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="address"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Address (Optional)
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => updateFormData("address", e.target.value)}
              placeholder="Enter your address"
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>

          {/* Cooking Experience Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 dark:text-amber-200">
              Cooking Experience
            </h3>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="experience"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              How many years of cooking experience do you have?
            </Label>
            <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
              <SelectTrigger className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Less than 1 year">
                  Less than 1 year
                </SelectItem>
                <SelectItem value="1-3 years">1-3 years</SelectItem>
                <SelectItem value="3-5 years">3-5 years</SelectItem>
                <SelectItem value="More than 5 years">
                  More than 5 years
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="cuisines"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              What types of food are you familiar with? (e.g., Indian, Continental, etc.)
            </Label>
            <Input
              id="cuisines"
              value={formData.cuisines}
              onChange={(e) => updateFormData("cuisines", e.target.value)}
              placeholder="Enter familiar cuisines"
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="bulk-cooking"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Are you comfortable cooking in large quantities?
            </Label>
            <Select value={formData.bulkCooking} onValueChange={(value) => updateFormData("bulkCooking", value)}>
              <SelectTrigger className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base">
                <SelectValue placeholder="Select yes/no" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="food-safety"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Do you have experience with food safety and hygiene practices?
            </Label>
            <Select value={formData.foodSafety} onValueChange={(value) => updateFormData("foodSafety", value)}>
              <SelectTrigger className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base">
                <SelectValue placeholder="Select yes/no" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Availability Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 dark:text-amber-200">
              Availability
            </h3>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="working-hours"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Preferred Working Hours (e.g., 6 AM - 11 AM)
            </Label>
            <Input
              id="working-hours"
              value={formData.workingHours}
              onChange={(e) => updateFormData("workingHours", e.target.value)}
              placeholder="Enter preferred hours"
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="weekends"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Are you available to work on weekends?
            </Label>
            <Select value={formData.weekends} onValueChange={(value) => updateFormData("weekends", value)}>
              <SelectTrigger className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base">
                <SelectValue placeholder="Select yes/no" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="workdays"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              How many days per week are you available to work?
            </Label>
            <Input
              id="workdays"
              type="number"
              value={formData.workdays}
              onChange={(e) => updateFormData("workdays", e.target.value)}
              placeholder="Enter number of days"
              min="1"
              max="7"
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>

          {/* Health & Safety Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 dark:text-amber-200">
              Health & Safety
            </h3>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="health-status"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Are you physically fit to work in a kitchen environment?
            </Label>
            <Select value={formData.healthStatus} onValueChange={(value) => updateFormData("healthStatus", value)}>
              <SelectTrigger className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base">
                <SelectValue placeholder="Select yes/no" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="medical-condition"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Do you have any medical conditions or allergies?
            </Label>
            <Select
              value={formData.medicalCondition}
              onValueChange={(value) => updateFormData("medicalCondition", value)}
            >
              <SelectTrigger className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base">
                <SelectValue placeholder="Select yes/no" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Salary Expectations Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 dark:text-amber-200">
              Salary Expectations
            </h3>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="salary"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              What is your expected daily/monthly salary?
            </Label>
            <Input
              id="salary"
              value={formData.salary}
              onChange={(e) => updateFormData("salary", e.target.value)}
              placeholder="Enter expected salary"
              required
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>

          {/* References Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 dark:text-amber-200">
              References (Optional)
            </h3>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="reference"
              className="text-amber-700 dark:text-amber-200 text-sm sm:text-base"
            >
              Please provide a reference who can vouch for your cooking skills
            </Label>
            <Input
              id="reference"
              value={formData.reference}
              onChange={(e) => updateFormData("reference", e.target.value)}
              placeholder="Enter reference details"
              className="bg-transparent border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500 rounded-full text-sm sm:text-base"
            />
          </div>

          <DialogFooter className="pt-4 sm:pt-6">
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}