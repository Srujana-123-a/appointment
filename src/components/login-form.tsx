"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt with:", formData)
  }

  return (
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-bold text-[#E6A817] mb-1">Login</h1>
      <h2 className="text-xl font-bold text-[#0078D7] mb-6">WELCOME BACK!</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="username"
            placeholder="Enter Your Username / Email"
            value={formData.username}
            onChange={handleChange}
            className="h-14 rounded-md border border-gray-300 px-4 text-gray-600 placeholder:text-gray-500"
          />
        </div>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            className="h-14 rounded-md border border-gray-300 px-4 text-gray-600 placeholder:text-gray-500 pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>

        <Button type="submit" className="w-full h-14 bg-[#0078D7] hover:bg-[#0067be] text-white text-lg font-medium">
          Log In
        </Button>
      </form>
    </div>
  )
}
