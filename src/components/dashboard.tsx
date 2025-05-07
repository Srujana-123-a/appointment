"use client"

import { useState } from "react"
import { UserCircle2, ChevronRight, Users, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Sidebar from "@/components/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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

export default function DashboardPage() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [delay, setDelay] = useState("")
const [shift, setShift] = useState("")
const [message, setMessage] = useState("Dear client,\n\nDue to unforseen circumstances, I would be running in a delay of 15 mins today in my morning shift. Please plan accordingly.")


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 border-b space-y-4 md:space-y-0">
          <h1 className="text-xl md:text-2xl font-bold text-[#0A2540]">Your Dashboard</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
            <div className="flex flex-col md:flex-row w-full md:w-auto items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <Button className="w-full md:w-auto bg-[#0078D7] hover:bg-[#0067be] text-white">
                <Link href="/dashboard1">Available now? Click here</Link>
              </Button>
              <Dialog>
  <DialogTrigger asChild>
    <Button
      variant="outline"
      className="w-full md:w-auto bg-[#E5EEF6] text-[#0A2540] border-[#E5EEF6] hover:bg-[#d8e6f3] hover:text-[#0A2540] hover:border-[#d8e6f3]"
    >
      Notify Delay
    </Button>
  </DialogTrigger>
  <DialogContent className="max-w-md rounded-xl">
    <DialogHeader>
      <DialogTitle className="text-[#0A2540] text-xl">Notify Delay</DialogTitle>
    </DialogHeader>
    <div className="space-y-4">
      <div>
        <Label>Delayed by</Label>
        <Input value={delay} onChange={(e) => setDelay(e.target.value)} placeholder="e.g. 15 mins" />
      </div>
      <div>
        <Label>Which Shift</Label>
        <Select onValueChange={setShift}>
          <SelectTrigger>
            <SelectValue placeholder="Select Shift" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning</SelectItem>
            <SelectItem value="afternoon">Afternoon</SelectItem>
            <SelectItem value="evening">Evening</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Message</Label>
        <Textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
    <DialogFooter>
      <Button className="bg-[#D49F20] hover:bg-[#c89114] text-white mt-4 w-full">
        Send to patients
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium text-[#0A2540]">Anna George</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <UserCircle2 className="h-10 w-10 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <Card className="border rounded-lg shadow-sm">
              <CardContent className="p-4 md:p-6 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">New Patients</p>
                  <h3 className="text-xl md:text-2xl font-bold">136</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="border rounded-lg shadow-sm">
              <CardContent className="p-4 md:p-6 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Appointments Booked</p>
                  <h3 className="text-xl md:text-2xl font-bold">120</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="border rounded-lg shadow-sm">
              <CardContent className="p-4 md:p-6">
                <p className="text-sm font-medium text-gray-500 mb-2">No upcoming leave in 7 days</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full bg-[#E5EEF6] text-[#0A2540] hover:bg-[#d8e6f3] justify-between">
                      {selectedDay || "Apply for leave"}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full min-w-[200px]">
                    <DropdownMenuItem onClick={() => setSelectedDay("Monday")}>Monday</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedDay("Tuesday")}>Tuesday</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedDay("Wednesday")}>Wednesday</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedDay("Thursday")}>Thursday</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedDay("Friday")}>Friday</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedDay("Saturday")}>Saturday</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedDay("Sunday")}>Sunday</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </div>

          {/* Appointments and Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Appointments Table */}
            <Card className="border rounded-lg shadow-sm">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg md:text-xl font-bold text-[#0A2540]">
                  Appointments booked for tomorrow
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left pb-2 font-medium text-gray-500">Patient Name</th>
                        <th className="text-left pb-2 font-medium text-gray-500">Booking Time</th>
                        <th className="text-left pb-2 font-medium text-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 md:py-3">Namin Sein</td>
                        <td className="py-2 md:py-3">09:23 AM, 3/3/23</td>
                        <td className="py-2 md:py-3 text-orange-500">Confirmed</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 md:py-3">Raj Kanna</td>
                        <td className="py-2 md:py-3">10:23 AM, 3/3/23</td>
                        <td className="py-2 md:py-3 text-orange-500">Confirmed</td>
                      </tr>
                      <tr>
                        <td className="py-2 md:py-3">Salman Ghar</td>
                        <td className="py-2 md:py-3">11:00 AM, 3/3/23</td>
                        <td className="py-2 md:py-3 text-orange-500">Confirmed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-[#E5EEF6] text-[#0A2540] border-[#E5EEF6] hover:bg-[#d8e6f3] hover:text-[#0A2540] hover:border-[#d8e6f3] flex items-center justify-center"
                  >
                    View here now <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Patients Chart */}
            <Card className="border rounded-lg shadow-sm">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg md:text-xl font-bold text-[#0A2540]">Patients year by year</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="h-48 md:h-64 flex items-end justify-between space-x-1 md:space-x-2">
                  {[
                    { year: 2018, height: "100px" },
                    { year: 2019, height: "180px" },
                    { year: 2020, height: "170px" },
                    { year: 2021, height: "120px" },
                    { year: 2022, height: "140px" },
                    { year: 2023, height: "70px" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="bg-[#0078D7] w-8 md:w-12" style={{ height: item.height }}></div>
                      <div className="mt-2 text-xs">{item.year}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="text-xs px-3 py-1 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    2018
                    <span className="ml-1 text-xs text-blue-500">Patients: 999</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
