"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { CalendarIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import Sidebar from "@/components/sidebar"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"



const data = [
  { year: "2018", patients: 999 },
  { year: "2019", patients: 1750 },
  { year: "2020", patients: 1730 },
  { year: "2021", patients: 950 },
  { year: "2022", patients: 1120 },
  { year: "2023", patients: 470 },
  
]


export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Use the reusable Sidebar component */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 bg-[#f6f9fc] p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-2xl md:text-3xl font-semibold">Your Dashboard</div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              <Link href="/online-appointment">One active shift. Click here to continue</Link>
            </button>
            <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm">Notify Delay</button>
          </div>
          <div className="text-right">
            <p className="text-blue-600 font-semibold">Anna George</p>
            <p className="text-sm text-gray-600">Admin</p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <UserIcon className="text-green-700" />
                <div>
                  <p className="text-gray-600">New Patients</p>
                  <p className="text-2xl font-bold">136</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CalendarIcon className="text-purple-700" />
                <div>
                  <p className="text-gray-600">Appointments Booked</p>
                  <p className="text-2xl font-bold">120</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-lg font-semibold">No upcoming leave in 7 days</p>
              <Button className="bg-blue-100 text-blue-700 mt-4">Apply for leave</Button>
            </CardContent>
          </Card>
        </div>

        {/* Appointment table and Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4">Appointments booked for tomorrow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left border-b">
                    <tr>
                      <th className="py-2">Patient Name</th>
                      <th>Booking Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Namin Sein</td>
                      <td>09:23 AM, 3/3/23</td>
                      <td className="text-orange-600">Confirmed</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Raj Kanna</td>
                      <td>10:23 AM, 3/3/23</td>
                      <td className="text-orange-600">Confirmed</td>
                    </tr>
                    <tr>
                      <td className="py-2">Salman Ghar</td>
                      <td>11:00 AM, 3/3/23</td>
                      <td className="text-orange-600">Confirmed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Button className="bg-blue-100 text-black w-full">View here now</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4">Patients year by year</h2>
              <div className="w-full h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="patients" fill="#0a74e6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
