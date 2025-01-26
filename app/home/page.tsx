"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { Application } from "@/types/application"
import Search from "../components/Search"
import ApplicationList from "../components/ApplicationList"
import Recommendations from "../components/Recommendations"

const HomePage = () => {
  const [applications, setApplications] = useState<Application[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  const filteredApplications = applications.filter(
    (app) =>
      app["im:name"].label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.summary?.label?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.title?.label?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("https://itunes.apple.com/tw/rss/topfreeapplications/limit=100/json")
        setApplications(response.data.feed.entry)
      } catch (error) {
        console.error("請求失敗:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])

  if (loading) {
    return <div className="text-center py-10">loading....</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* 搜尋框 */}
        <Search onSearch={setSearchQuery} />

        {/* 推薦應用程式 */}
        <Recommendations applications={filteredApplications.slice(0, 10)} />

        {/* 應用程式列表 */}
        <ApplicationList applications={filteredApplications} />
      </div>
    </div>
  )
}

export default HomePage
