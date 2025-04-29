"use client"

import { UserCircle2, Search, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Sidebar from "@/components/sidebar"

export default function PatientsPage() {
  const patients = [
    {
      id: "#23",
      name: "Namin Sein",
      age: 23,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "#453",
      name: "Namin Sein",
      age: 35,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "#1092",
      name: "Namin Sein",
      age: 44,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "#7823",
      name: "Namin Sein",
      age: 28,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "#35",
      name: "Namin Sein",
      age: 67,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "#899",
      name: "Namin Sein",
      age: 13,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "#189",
      name: "Namin Sein",
      age: 55,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "#12",
      name: "Namin Sein",
      age: 43,
      phone: "+ 91 89129 8399",
      gender: "Female",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center p-6 space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold text-[#0A2540]">Patients Data</h1>
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

        {/* Search and Add New */}
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <Button
                  variant="outline"
                  className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-between rounded-r-none border-r-0 w-full md:min-w-[150px]"
                >
                  Search By
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Type Here..."
                  className="h-10 px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0078D7] focus:border-transparent rounded-l-none w-full md:w-[300px]"
                />
                <Button className="absolute right-0 top-0 h-10 w-10 bg-[#0078D7] hover:bg-[#0067be] rounded-l-none">
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
            <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center w-full md:w-auto">
              Add New
              <Plus className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 mx-6"></div>

        {/* Patients Table */}
        <div className="px-6 py-4 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 font-medium text-[#0A2540]">Hospital ID</th>
                <th className="text-center py-3 px-4 font-medium text-[#0A2540]">
                  <UserCircle2 className="h-5 w-5 mx-auto" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-[#0A2540]">Patient Name</th>
                <th className="text-left py-3 px-4 font-medium text-[#0A2540]">Age</th>
                <th className="text-left py-3 px-4 font-medium text-[#0A2540]">Phone Number</th>
                <th className="text-left py-3 px-4 font-medium text-[#0A2540]">Gender</th>
                <th className="text-left py-3 px-4 font-medium text-[#0A2540]">Profile</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient.id} className={index % 2 === 0 ? "bg-[#E5EEF6]" : "bg-white"}>
                  <td className="py-3 px-4">{patient.id}</td>
                  <td className="py-3 px-4 flex justify-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={patient.image || "/placeholder.svg"}
                        alt={patient.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">{patient.name}</td>
                  <td className="py-3 px-4">{patient.age}</td>
                  <td className="py-3 px-4">{patient.phone}</td>
                  <td className="py-3 px-4">{patient.gender}</td>
                  <td className="py-3 px-4">
                    <Button className="bg-[#FFC107] hover:bg-[#e6af06] text-black text-xs px-4">View Profile</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mx-6 mb-6 space-y-4 md:space-y-0">
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
  )
}
