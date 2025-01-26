"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { Application } from "@/types/application"
import Search from "../components/Search"
import ApplicationList from "../components/ApplicationList"
import Recommendations from "../components/Recommendations"

const HomePage = () => {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("https://itunes.apple.com/tw/rss/topfreeapplications/limit=100/json")
        setApplications(response.data.feed.entry)
        console.log("response", response)
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
        <Search />

        {/* 應用推薦 */}
        <Recommendations />

        {/* 應用列表 */}
        <ApplicationList applications={applications} />
      </div>
    </div>
  )
}

export default HomePage
