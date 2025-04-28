"use client"

import { useState } from "react"
import { Calendar, Clock, Users, LogOut, Plus, ChevronDown, ChevronRight, X, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
  // State for prototype functionality
  const [selectedAppointments, setSelectedAppointments] = useState<number[]>([])
  const [showDateFilter, setShowDateFilter] = useState(false)
  const [showShiftFilter, setShowShiftFilter] = useState(false)
  const [showDoctorFilter, setShowDoctorFilter] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [appointmentsList, setAppointmentsList] = useState(appointments)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedShift, setSelectedShift] = useState<string | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newAppointment, setNewAppointment] = useState({
    name: "",
    hospitalId: "",
    timeSlot: "",
    reason: "",
  })

  // Handle checkbox selection
  const handleSelectAppointment = (token: number) => {
    if (selectedAppointments.includes(token)) {
      setSelectedAppointments(selectedAppointments.filter((id) => id !== token))
    } else {
      setSelectedAppointments([...selectedAppointments, token])
    }
  }

  // Handle select all
  const handleSelectAll = () => {
    if (selectedAppointments.length === appointmentsList.length) {
      setSelectedAppointments([])
    } else {
      setSelectedAppointments(appointmentsList.map((app) => app.token))
    }
  }

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Handle items per page change
  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items)
    setCurrentPage(1) // Reset to first page when changing items per page
  }

  // Calculate pagination
  const totalPages = Math.ceil(appointmentsList.length / itemsPerPage)
  const paginatedAppointments = appointmentsList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle date filter
  const handleDateFilter = (date: string) => {
    setSelectedDate(date)
    setShowDateFilter(false)
    // In a real app, this would filter the appointments based on date
  }

  // Handle shift filter
  const handleShiftFilter = (shift: string) => {
    setSelectedShift(shift)
    setShowShiftFilter(false)
    // In a real app, this would filter the appointments based on shift
  }

  // Handle doctor filter
  const handleDoctorFilter = (doctor: string) => {
    setSelectedDoctor(doctor)
    setShowDoctorFilter(false)
    // In a real app, this would filter the appointments based on doctor
  }

  // Handle appointment status change
  const handleStatusChange = (token: number, status: string) => {
    setAppointmentsList(appointmentsList.map((app) => (app.token === token ? { ...app, status } : app)))
  }

  // Handle adding new appointment
  const handleAddAppointment = () => {
    // Create a new appointment with the form data
    const newToken = Math.max(...appointmentsList.map((app) => app.token)) + 1
    const appointment = {
      token: newToken,
      name: newAppointment.name || "New Patient",
      avatar: "/placeholder.svg?height=32&width=32",
      hospitalId: newAppointment.hospitalId || `#${Math.floor(Math.random() * 1000)}`,
      timeSlot: newAppointment.timeSlot || "12:00 PM, today",
      reason: newAppointment.reason || "Checkup",
      status: "Confirmed",
    }

    // Update the appointments list with the new appointment
    const updatedAppointments = [...appointmentsList, appointment]
    setAppointmentsList(updatedAppointments)

    // Calculate which page the new appointment will be on
    const newAppointmentPage = Math.ceil(updatedAppointments.length / itemsPerPage)

    // Navigate to that page to show the new appointment
    setCurrentPage(newAppointmentPage)

    // Close the modal and reset the form
    setShowAddModal(false)
    setNewAppointment({
      name: "",
      hospitalId: "",
      timeSlot: "",
      reason: "",
    })
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-blue-500 text-white p-4 flex flex-col">
        <div className="text-2xl font-bold mb-8">MyMedic</div>

        <nav className="space-y-2 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-600">
            <Calendar className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          <Link href="/appointments" className="flex items-center gap-3 p-3 rounded-md bg-blue-600">
            <Clock className="h-5 w-5" />
            <span>Appointments</span>
          </Link>

          <Link href="schedule" className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-600">
            <Calendar className="h-5 w-5" />
            <span>Your Schedule</span>
          </Link>

          <Link href="patients" className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-600">
            <Users className="h-5 w-5" />
            <span>Patients Data</span>
          </Link>
        </nav>

        <Link href="#" className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-600 mt-auto">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Appointments Booked overall</h1>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-blue-600">Anna George</div>
              <div className="text-sm text-gray-500">Admin</div>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <button
              className="w-full flex items-center justify-between bg-white border rounded-md p-3 text-gray-700"
              onClick={() => setShowDateFilter(!showDateFilter)}
            >
              <span>{selectedDate || "Date"}</span>
              <ChevronDown className="h-5 w-5" />
            </button>

            {showDateFilter && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg z-10">
                <div className="p-2">
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleDateFilter("Today")}
                  >
                    Today
                  </button>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleDateFilter("Tomorrow")}
                  >
                    Tomorrow
                  </button>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleDateFilter("This Week")}
                  >
                    This Week
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="w-full flex items-center justify-between bg-white border rounded-md p-3 text-gray-700"
              onClick={() => setShowShiftFilter(!showShiftFilter)}
            >
              <span>{selectedShift || "Shift"}</span>
              <ChevronDown className="h-5 w-5" />
            </button>

            {showShiftFilter && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg z-10">
                <div className="p-2">
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleShiftFilter("Morning")}
                  >
                    Morning
                  </button>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleShiftFilter("Afternoon")}
                  >
                    Afternoon
                  </button>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleShiftFilter("Evening")}
                  >
                    Evening
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="w-full flex items-center justify-between bg-white border rounded-md p-3 text-gray-700"
              onClick={() => setShowDoctorFilter(!showDoctorFilter)}
            >
              <span>{selectedDoctor || "Filter by doctor"}</span>
              <ChevronDown className="h-5 w-5" />
            </button>

            {showDoctorFilter && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg z-10">
                <div className="p-2">
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleDoctorFilter("Dr. Smith")}
                  >
                    Dr. Smith
                  </button>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleDoctorFilter("Dr. Johnson")}
                  >
                    Dr. Johnson
                  </button>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleDoctorFilter("Dr. Williams")}
                  >
                    Dr. Williams
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Total Appointments</div>
              <div className="text-2xl font-bold">{appointmentsList.length}</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Cancelled bookings</div>
              <div className="text-2xl font-bold">
                {appointmentsList.filter((app) => app.status === "Cancelled").length}
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Bulk Actions (visible when items are selected) */}
          {selectedAppointments.length > 0 && (
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
              <span className="text-sm font-medium">{selectedAppointments.length} selected</span>
              <button
                className="text-red-600 text-sm hover:underline"
                onClick={() => {
                  // In a real app, this would delete the selected appointments
                  setAppointmentsList(appointmentsList.filter((app) => !selectedAppointments.includes(app.token)))
                  setSelectedAppointments([])
                }}
              >
                Delete
              </button>
              <button
                className="text-purple-600 text-sm hover:underline"
                onClick={() => {
                  // Mark all selected as confirmed
                  setAppointmentsList(
                    appointmentsList.map((app) =>
                      selectedAppointments.includes(app.token) ? { ...app, status: "Confirmed" } : app,
                    ),
                  )
                  setSelectedAppointments([])
                }}
              >
                Confirm
              </button>
            </div>
          )}

          {/* Add New Button */}
          <button
            className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 ml-auto"
            onClick={() => setShowAddModal(true)}
          >
            <span>Add New</span>
            <Plus className="h-5 w-5" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left w-10">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={selectedAppointments.length === appointmentsList.length && appointmentsList.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="p-3 text-left">Token No.</th>
                <th className="p-3 text-left">Patient Name</th>
                <th className="p-3 text-left">Hospital ID</th>
                <th className="p-3 text-left">Time Slot</th>
                <th className="p-3 text-left">Reason</th>
                <th className="p-3 text-left">Appointment Status</th>
                <th className="p-3 text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              {paginatedAppointments.map((appointment, index) => (
                <tr key={appointment.token} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedAppointments.includes(appointment.token)}
                      onChange={() => handleSelectAppointment(appointment.token)}
                    />
                  </td>
                  <td className="p-3">{appointment.token}</td>
                  <td className="p-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image
                        src={appointment.avatar || "/placeholder.svg?height=32&width=32"}
                        alt={appointment.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    {appointment.name}
                  </td>
                  <td className="p-3">{appointment.hospitalId}</td>
                  <td className="p-3">{appointment.timeSlot}</td>
                  <td className="p-3">{appointment.reason}</td>
                  <td className="p-3">
                    <div className="relative group">
                      <span
                        className={`px-2 py-1 rounded-full text-xs cursor-pointer ${
                          appointment.status === "Confirmed"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-red-100 text-red-600"
                        }`}
                        onClick={() => {
                          // Toggle status on click
                          const newStatus = appointment.status === "Confirmed" ? "Cancelled" : "Confirmed"
                          handleStatusChange(appointment.token, newStatus)
                        }}
                      >
                        {appointment.status}
                      </span>
                      <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-md rounded-md p-1 z-10">
                        <button
                          className="flex items-center gap-1 px-2 py-1 text-xs text-purple-600 hover:bg-gray-100 rounded w-full text-left"
                          onClick={() => handleStatusChange(appointment.token, "Confirmed")}
                        >
                          <Check className="h-3 w-3" /> Confirm
                        </button>
                        <button
                          className="flex items-center gap-1 px-2 py-1 text-xs text-red-600 hover:bg-gray-100 rounded w-full text-left"
                          onClick={() => handleStatusChange(appointment.token, "Cancelled")}
                        >
                          <X className="h-3 w-3" /> Cancel
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <button className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">View Profile</button>
                  </td>
                </tr>
              ))}
              {paginatedAppointments.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-4 text-center text-gray-500">
                    No appointments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="text-sm text-gray-600 mb-2 md:mb-0">
            Show per Page -
            <button
              className={`ml-1 ${itemsPerPage === 5 ? "font-bold" : ""}`}
              onClick={() => handleItemsPerPageChange(5)}
            >
              5
            </button>
            ,
            <button
              className={`ml-1 ${itemsPerPage === 10 ? "font-bold" : ""}`}
              onClick={() => handleItemsPerPageChange(10)}
            >
              10
            </button>
            ,
            <button
              className={`ml-1 ${itemsPerPage === 20 ? "font-bold" : ""}`}
              onClick={() => handleItemsPerPageChange(20)}
            >
              20
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">
              Page
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`ml-1 ${currentPage === page ? "font-bold" : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </span>
            <button
              className="flex items-center gap-1 bg-white border border-gray-300 rounded px-3 py-1 text-sm"
              onClick={() => {
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1)
                }
              }}
              disabled={currentPage === totalPages}
            >
              <span>Next Page</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Add New Appointment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Add New Appointment</h3>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowAddModal(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newAppointment.name}
                  onChange={(e) => setNewAppointment({ ...newAppointment, name: e.target.value })}
                  placeholder="Enter patient name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hospital ID</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newAppointment.hospitalId}
                  onChange={(e) => setNewAppointment({ ...newAppointment, hospitalId: e.target.value })}
                  placeholder="Enter hospital ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newAppointment.timeSlot}
                  onChange={(e) => setNewAppointment({ ...newAppointment, timeSlot: e.target.value })}
                  placeholder="Enter time slot"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newAppointment.reason}
                  onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })}
                  placeholder="Enter reason"
                />
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handleAddAppointment}
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const appointments = [
  {
    token: 1,
    name: "Namin Sein",
    avatar: "/placeholder.svg?height=32&width=32",
    hospitalId: "#23",
    timeSlot: "10:05 AM, today",
    reason: "Fever",
    status: "Confirmed",
  },
  {
    token: 2,
    name: "Namin Sein",
    avatar: "/placeholder.svg?height=32&width=32",
    hospitalId: "#23",
    timeSlot: "10:30 AM, today",
    reason: "Fever",
    status: "Confirmed",
  },
  {
    token: 3,
    name: "Namin Sein",
    avatar: "/placeholder.svg?height=32&width=32",
    hospitalId: "#246",
    timeSlot: "11:15 AM, today",
    reason: "Fever",
    status: "Confirmed",
  },
  {
    token: 4,
    name: "Namin Sein",
    avatar: "/placeholder.svg?height=32&width=32",
    hospitalId: "#456",
    timeSlot: "11:00 AM, today",
    reason: "Fever",
    status: "Confirmed",
  },
  {
    token: 5,
    name: "Namin Sein",
    avatar: "/placeholder.svg?height=32&width=32",
    hospitalId: "#246",
    timeSlot: "11:45 AM, today",
    reason: "Fever",
    status: "Confirmed",
  },
  {
    token: 6,
    name: "Namin Sein",
    avatar: "/placeholder.svg?height=32&width=32",
    hospitalId: "#456",
    timeSlot: "10:15 AM, today",
    reason: "Fever",
    status: "Cancelled",
  },
]
