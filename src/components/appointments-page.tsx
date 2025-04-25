"use client"

import { useState } from "react"
import { LayoutDashboard, Calendar, Clock, Users, LogOut, ChevronDown, UserCircle2, X, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"

export default function AppointmentsPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const toggleRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

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
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-[#0067be] text-white"
          >
            <Calendar className="mr-3 h-5 w-5" />
            Appointments
          </Link>
          <Link
            href="/schedule"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-white hover:bg-[#0067be]"
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
          <h1 className="text-2xl font-bold text-[#0A2540]">Appointments Booked overall</h1>
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

        {/* Appointments Content */}
        <div className="p-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              variant="outline"
              className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-between min-w-[200px]"
            >
              Date
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-between min-w-[200px]"
            >
              Shift
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-between min-w-[200px]"
            >
              Filter by doctor
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card className="border rounded-lg shadow-sm">
              <CardContent className="p-6 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Appointments</p>
                  <h3 className="text-2xl font-bold">52</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="border rounded-lg shadow-sm">
              <CardContent className="p-6 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Cancelled bookings</p>
                  <h3 className="text-2xl font-bold">01</h3>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end items-center">
              <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center">
                Add New
                <Plus className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Appointments Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left"></th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Token No.</th>
                    <th className="px-4 py-3 text-center font-medium text-gray-500"></th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Patient Name</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Hospital ID</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Time Slot</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Reason</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Appointment Status</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: 1,
                      token: 1,
                      name: "Namin Sein",
                      hospitalId: "#23",
                      timeSlot: "10:05 AM, today",
                      reason: "Fever",
                      status: "Confirmed",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 2,
                      token: 2,
                      name: "Namin Sein",
                      hospitalId: "#23",
                      timeSlot: "10:30 AM, today",
                      reason: "Fever",
                      status: "Confirmed",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 3,
                      token: 3,
                      name: "Namin Sein",
                      hospitalId: "#246",
                      timeSlot: "11:15 AM, today",
                      reason: "Fever",
                      status: "Confirmed",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 4,
                      token: 4,
                      name: "Namin Sein",
                      hospitalId: "#456",
                      timeSlot: "11:00 AM, today",
                      reason: "Fever",
                      status: "Confirmed",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 5,
                      token: 5,
                      name: "Namin Sein",
                      hospitalId: "#246",
                      timeSlot: "11:45 AM, today",
                      reason: "Fever",
                      status: "Confirmed",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    {
                      id: 6,
                      token: 6,
                      name: "Namin Sein",
                      hospitalId: "#456",
                      timeSlot: "10:15 AM, today",
                      reason: "Fever",
                      status: "Cancelled",
                      image: "/placeholder.svg?height=40&width=40",
                    },
                  ].map((appointment) => (
                    <tr
                      key={appointment.id}
                      className={`${appointment.id % 2 === 0 ? "bg-white" : "bg-[#E5EEF6]"} hover:bg-gray-100`}
                    >
                      <td className="px-4 py-3">
                        <Checkbox
                          checked={selectedRows.includes(appointment.id)}
                          onCheckedChange={() => toggleRow(appointment.id)}
                        />
                      </td>
                      <td className="px-4 py-3">{appointment.token}</td>
                      <td className="px-4 py-3 flex justify-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                          <Image
                            src={appointment.image || "/placeholder.svg"}
                            alt={appointment.name}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3">{appointment.name}</td>
                      <td className="px-4 py-3">{appointment.hospitalId}</td>
                      <td className="px-4 py-3">{appointment.timeSlot}</td>
                      <td className="px-4 py-3">{appointment.reason}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`${
                            appointment.status === "Confirmed" ? "text-purple-600" : "text-red-500"
                          } font-medium`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button className="bg-[#FFC107] hover:bg-[#e6af06] text-black text-xs px-4">
                          View Profile
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">Show per Page - 5, 10, 20</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Page 1,2,3...7</span>
                <Button variant="outline" className="text-sm">
                  Next Page &gt;&gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
