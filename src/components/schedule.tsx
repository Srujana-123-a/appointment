"use client"

import { useState } from "react"
import { UserCircle2, Edit, Plus, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Sidebar from "@/components/sidebar"
import { Calendar } from "react-date-range"
import { addDays } from "date-fns"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function SchedulePage() {
  const [shifts, setShifts] = useState([
    { days: ["Monday", "Saturday"], start: "10 AM", end: "12 PM" },
    { days: ["Monday", "Saturday"], start: "06 PM", end: "09 PM" }
  ])
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [leaveReason, setLeaveReason] = useState("")
  const [leaveDates, setLeaveDates] = useState([new Date(), addDays(new Date(), 1)])
  const [shiftSelections, setShiftSelections] = useState({ shift1: false, shift2: false })

  const handleToggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  const handleAddShift = () => {
    if (start && end && selectedDays.length > 0) {
      setShifts(prev => [...prev, { days: selectedDays, start, end }])
      setStart("")
      setEnd("")
      setSelectedDays([])
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

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

        <div className="border-b border-gray-200 mx-6"></div>

        <div className="p-6">
          {/* Shift Section */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#0A2540]">General Timings/Shift</h2>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center">
                    Add New
                    <Plus className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-md w-full rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Add new Shift</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4 mt-4">
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        placeholder="Shift Start *"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        className="flex-1 p-2 border rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Shift End *"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        className="flex-1 p-2 border rounded-md"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-700 font-medium mb-2">Choose days</p>
                      <div className="flex flex-wrap gap-2">
                        {DAYS.map(day => {
                          const selected = selectedDays.includes(day)
                          return (
                            <button
                              key={day}
                              onClick={() => handleToggleDay(day)}
                              className={`px-3 py-1 rounded-md text-sm border ${
                                selected ? "bg-gray-700 text-white" : "bg-white text-gray-700"
                              }`}
                            >
                              {day} {selected && <X className="inline ml-1 w-3 h-3" />}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-[#E69F1E] hover:bg-[#d28f15] text-white mt-4"
                      onClick={handleAddShift}
                    >
                      Add new shift
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-4">
              {shifts.map((shift, i) => (
                <div key={i} className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex-1 p-4 border border-gray-200 rounded-md bg-white w-full">
                    {shift.days.join(" - ")} | {shift.start} - {shift.end}
                  </div>
                  <Button
                    size="icon"
                    className="ml-0 md:ml-3 mt-2 md:mt-0 h-10 w-10 rounded-full bg-[#0078D7] hover:bg-[#0067be] text-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Leave Section */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#0A2540]">Upcoming Leave</h2>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center">
                    Apply for leave
                    <Plus className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-full max-w-4xl rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Apply leave</DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-col md:flex-row mt-4 gap-6">
                    {/* Left: Calendar */}
                    {/* Calendar aligned to right side */}
<div className="w-full md:w-1/2 flex justify-end">
  <div className="rounded-lg shadow-md border border-gray-200 p-2 bg-white" style={{ width: "320px" }}>
    <Calendar
      date={leaveDates[0]}
      onChange={(date) => setLeaveDates([date])}
      color="#0078D7"
    />
    <p className="text-sm mt-2 text-gray-500 text-center">Select the dates here</p>
  </div>
</div>

                    {/* Right: Form */}
                    <div className="w-full md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-gray-700 font-medium mb-1">No. of Days selected</p>
                        <input
                          type="text"
                          value={leaveDates.length}
                          readOnly
                          className="w-full border rounded-md p-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600"
                            checked={shiftSelections.shift1}
                            onChange={(e) =>
                              setShiftSelections(prev => ({ ...prev, shift1: e.target.checked }))
                            }
                          />
                          <span>Shift 1</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600"
                            checked={shiftSelections.shift2}
                            onChange={(e) =>
                              setShiftSelections(prev => ({ ...prev, shift2: e.target.checked }))
                            }
                          />
                          <span>Shift 2</span>
                        </label>
                      </div>

                      <div>
                        <p className="text-sm text-gray-700 font-medium mb-1">Reason</p>
                        <textarea
                          rows={4}
                          value={leaveReason}
                          onChange={(e) => setLeaveReason(e.target.value)}
                          className="w-full border rounded-md p-2"
                        />
                      </div>

                      <Button className="w-full bg-[#E69F1E] hover:bg-[#d28f15] text-white mt-4">
                        Proceed
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="p-4 border border-gray-200 rounded-md bg-white">None applied</div>
          </div>

          {/* Time Slot Interval */}
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
