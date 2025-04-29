"use client"

import { UserCircle2, Edit, Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function SchedulePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white gap-4">
          <h1 className="text-2xl font-bold text-[#0A2540]">Schedule Main menu</h1>
          <div className="flex items-center">
            <div className="text-right mr-3">
              <div className="text-sm font-medium text-[#0A2540]">Anna George</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <UserCircle2 className="h-10 w-10 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Divider */}
        <div className="border-b border-gray-200 mx-6"></div>

        {/* Schedule Content */}
        <div className="p-6">
          {/* General Timings/Shift Section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-xl font-bold text-[#0A2540]">General Timings/Shift</h2>
              <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center">
                Add New
                <Plus className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* First Shift */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1 p-4 border border-gray-200 rounded-md bg-white w-full">
                  Monday - Saturday | 10 AM - 12 PM
                </div>
                <Button
                  size="icon"
                  className="ml-0 md:ml-3 mt-2 md:mt-0 h-10 w-10 rounded-full bg-[#0078D7] hover:bg-[#0067be] text-white"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              {/* Second Shift */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1 p-4 border border-gray-200 rounded-md bg-white w-full">
                  Monday - Saturday | 06 PM - 09 PM
                </div>
                <Button
                  size="icon"
                  className="ml-0 md:ml-3 mt-2 md:mt-0 h-10 w-10 rounded-full bg-[#0078D7] hover:bg-[#0067be] text-white"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Upcoming Leave Section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-xl font-bold text-[#0A2540]">Upcoming Leave</h2>
              <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center">
                Apply for leave
                <Plus className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 border border-gray-200 rounded-md bg-white">None applied</div>
          </div>

          {/* Time Slot Interval Section */}
          <div>
            <h2 className="text-xl font-bold text-[#0A2540] mb-6">Time Slot interval</h2>
            <div className="relative inline-block">
              <Button
                variant="outline"
                className="w-full md:w-[120px] bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-between"
              >
                15 mins
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
