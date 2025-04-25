"use client"

import { LayoutDashboard, Calendar, Clock, Users, LogOut, UserCircle2, Edit, Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-[#0078D7] text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold">MyMedic</h1>
        </div>
        <nav className="flex-1 px-3 py-2 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-white hover:bg-[#0067be]"
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/appointments"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-white hover:bg-[#0067be]"
          >
            <Calendar className="mr-3 h-5 w-5" />
            Appointments
          </Link>
          <Link
            href="/schedule"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-[#0067be] text-white"
          >
            <Clock className="mr-3 h-5 w-5" />
            Your Schedule
          </Link>
          <Link
            href="/patients"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-white hover:bg-[#0067be]"
          >
            <Users className="mr-3 h-5 w-5" />
            Patients Data
          </Link>
        </nav>
        <div className="p-3">
          <Link
            href="/"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-white hover:bg-[#0067be]"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Log Out
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white">
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#0A2540]">General Timings/Shift</h2>
              <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center">
                Add New
                <Plus className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* First Shift */}
              <div className="flex items-center">
                <div className="flex-1 p-4 border border-gray-200 rounded-md bg-white">
                  Monday - Saturday | 10 AM - 12 PM
                </div>
                <Button size="icon" className="ml-3 h-10 w-10 rounded-full bg-[#0078D7] hover:bg-[#0067be] text-white">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              {/* Second Shift */}
              <div className="flex items-center">
                <div className="flex-1 p-4 border border-gray-200 rounded-md bg-white">
                  Monday - Saturday | 06 PM - 09 PM
                </div>
                <Button size="icon" className="ml-3 h-10 w-10 rounded-full bg-[#0078D7] hover:bg-[#0067be] text-white">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Upcoming Leave Section */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
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
            <h2 className="text-xl font-bold text-[#0A2540] mb-6">Time Slot intreval</h2>
            <div className="relative inline-block">
              <Button
                variant="outline"
                className="w-[120px] bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-between"
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
