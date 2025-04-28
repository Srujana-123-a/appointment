import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus, UserCircle2 } from "lucide-react";
import Image from "next/image";
import doctor from "@/app/Ellipse 17.png";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const appointments = [
  {
    token: 1,
    name: "Namin Sein",
    hospitalId: "#23",
    time: "10:05 AM",
    reason: "Fever",
    status: "Treated",
    image: "/avatars/user1.png",
  },
  {
    token: 2,
    name: "Namin Sein",
    hospitalId: "#23",
    time: "10:15 AM",
    reason: "Fever",
    status: "Confirmed",
    image: "/avatars/user2.png",
  },
  {
    token: 3,
    name: "Namin Sein",
    hospitalId: "#246",
    time: "10:45 AM",
    reason: "Fever",
    status: "Confirmed",
    image: "/avatars/user3.png",
  },
  {
    token: 4,
    name: "Namin Sein",
    hospitalId: "#456",
    time: "10:30 AM",
    reason: "Fever",
    status: "Cancelled",
    image: "/avatars/user4.png",
  },
];

export default function DoctorDashboard() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Image
          src={doctor}
          alt="Doctor"
          width={120}
          height={120}
          className="rounded-full border"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">Doctor Name</h1>
          <p className="text-sm text-gray-600">General Doctor (M.D M.B.B.S)</p>
          <p className="text-sm text-gray-600">12 yrs of experience</p>
          <p className="text-sm text-gray-600">General Clinic Hours - 10 AM - 1 PM, 6PM - 9 PM</p>
        </div>
        <span className="ml-auto bg-white px-4 py-1 rounded-full shadow text-sm font-medium flex items-center gap-2 mt-4 sm:mt-0">
          Active Now <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex justify-between w-full">
              Date <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start">Today</Button>
              <Button variant="ghost" className="justify-start">Tomorrow</Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex justify-between w-full">
              Shift <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start">Morning 10Am-1PM</Button>
              <Button variant="ghost" className="justify-start">Afternoon 6PM-9PM</Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex justify-between w-full">
              Sort <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start">Confirmed</Button>
              <Button variant="ghost" className="justify-start">Treated</Button>
              <Button variant="ghost" className="justify-start">Cancelled</Button>
            </div>
          </PopoverContent>
        </Popover>

        <Button variant="default" className="w-full">
          <Link href="/addnew">Add New</Link> <Plus className="ml-2 w-4 h-4" />
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="text-purple-600">
              <UserCircle2 size={32} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Appointments</p>
              <p className="text-xl font-semibold">52</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="text-green-600">👍</div>
            <div>
              <p className="text-sm text-gray-500">Review finished</p>
              <p className="text-xl font-semibold">08</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="text-red-600">❌</div>
            <div>
              <p className="text-sm text-gray-500">Cancelled bookings</p>
              <p className="text-xl font-semibold">01</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[700px]">
          <thead className="text-xs text-gray-600 border-b">
            <tr>
              <th className="py-2">Token No.</th>
              <th className="py-2"></th>
              <th className="py-2">Patient Name</th>
              <th className="py-2">Hospital ID</th>
              <th className="py-2">Time Slot</th>
              <th className="py-2">Reason</th>
              <th className="py-2">Appointment Status</th>
              <th className="py-2">Profile</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={i} className={`${i % 2 === 0 ? "bg-blue-100" : "bg-gray-100"}`}>
                <td className="py-3 px-2">{a.token}</td>
                <td className="py-3 px-2">
                  <Image
                    src={a.image}
                    alt={a.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </td>
                <td className="py-3 px-2">{a.name}</td>
                <td className="py-3 px-2">{a.hospitalId}</td>
                <td className="py-3 px-2">{a.time}</td>
                <td className="py-3 px-2">{a.reason}</td>
                <td className="py-3 px-2">
                  <span
                    className={`font-semibold ${
                      a.status === "Treated"
                        ? "text-green-600"
                        : a.status === "Confirmed"
                        ? "text-purple-600"
                        : "text-red-500"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <Button className="bg-yellow-400 text-black">
                    View Profile
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right text-sm text-gray-500 mt-2">Page 1,2,3...7 &gt;&gt;</div>
      </div>
    </div>
  );
}
