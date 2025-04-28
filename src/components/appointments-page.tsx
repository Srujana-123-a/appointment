import { Calendar, Clock, Users, FileText, LogOut, Plus, ChevronDown, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
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
            <button className="w-full flex items-center justify-between bg-white border rounded-md p-3 text-gray-700">
              <span>Date</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
          
          <div className="relative">
            <button className="w-full flex items-center justify-between bg-white border rounded-md p-3 text-gray-700">
              <span>Shift</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
          
          <div className="relative">
            <button className="w-full flex items-center justify-between bg-white border rounded-md p-3 text-gray-700">
              <span>Filter by doctor</span>
              <ChevronDown className="h-5 w-5" />
            </button>
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
              <div className="text-2xl font-bold">52</div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Cancelled bookings</div>
              <div className="text-2xl font-bold">01</div>
            </div>
          </div>
        </div>
        
        {/* Add New Button */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50">
            <span>Add New</span>
            <Plus className="h-5 w-5" />
          </button>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left w-10">
                  <input type="checkbox" className="rounded" />
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
              {appointments.map((appointment, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="p-3">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-3">{appointment.token}</td>
                  <td className="p-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image 
                        src={appointment.avatar || "/placeholder.svg"} 
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
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      appointment.status === 'Confirmed' 
                        ? 'text-purple-600' 
                        : 'text-red-600'
                    }`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="text-sm text-gray-600 mb-2 md:mb-0">
            Show per Page - 5, 10, 20
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Page 1,2,3...7</span>
            <button className="flex items-center gap-1 bg-white border border-gray-300 rounded px-3 py-1 text-sm">
              <span>Next Page</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

const appointments = [
  {
    token: 1,
    name: 'Namin Sein',
    avatar: '/placeholder.svg?height=32&width=32',
    hospitalId: '#23',
    timeSlot: '10:05 AM, today',
    reason: 'Fever',
    status: 'Confirmed'
  },
  {
    token: 2,
    name: 'Namin Sein',
    avatar: '/placeholder.svg?height=32&width=32',
    hospitalId: '#23',
    timeSlot: '10:30 AM, today',
    reason: 'Fever',
    status: 'Confirmed'
  },
  {
    token: 3,
    name: 'Namin Sein',
    avatar: '/placeholder.svg?height=32&width=32',
    hospitalId: '#246',
    timeSlot: '11:15 AM, today',
    reason: 'Fever',
    status: 'Confirmed'
  },
  {
    token: 4,
    name: 'Namin Sein',
    avatar: '/placeholder.svg?height=32&width=32',
    hospitalId: '#456',
    timeSlot: '11:00 AM, today',
    reason: 'Fever',
    status: 'Confirmed'
  },
  {
    token: 5,
    name: 'Namin Sein',
    avatar: '/placeholder.svg?height=32&width=32',
    hospitalId: '#246',
    timeSlot: '11:45 AM, today',
    reason: 'Fever',
    status: 'Confirmed'
  },
  {
    token: 6,
    name: 'Namin Sein',
    avatar: '/placeholder.svg?height=32&width=32',
    hospitalId: '#456',
    timeSlot: '10:15 AM, today',
    reason: 'Fever',
    status: 'Cancelled'
  }
]
