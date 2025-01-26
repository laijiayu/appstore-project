"use client"

import Image from "next/image"
import axios from "axios"
import { useEffect, useState } from "react"
import { Application } from "@/types/application"

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
        <div className="mb-6">
          <input
            type="text"
            placeholder="搜尋"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* 應用推薦 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">推薦</h2>
          <div className="grid grid-cols-4 gap-4">
            <Image src="/next.svg" alt="Fyuse - 3D 相片" width={64} height={64} className="mx-auto" />
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/next.svg" alt="Fyuse - 3D 相片" width={64} height={64} className="h-16 w-16 mx-auto" />
              <p className="text-center text-sm font-medium mt-2">Fyuse - 3D 相片</p>
              <p className="text-center text-xs text-gray-500">照片和視訊</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/next.svg" alt="Sound Rebound" width={64} height={64} className="h-16 w-16 mx-auto" />
              <p className="text-center text-sm font-medium mt-2">Sound Rebound</p>
              <p className="text-center text-xs text-gray-500">教育</p>
            </div>
            {/* 其餘應用可依此格式添加 */}
          </div>
        </div>

        {/* 應用列表 */}
        <div>
          <h2 className="text-xl font-bold mb-4">應用列表</h2>
          <ul className="grid grid-cols-1 gap-4">
            {applications.map((app, index) => (
              <li key={app.id.attributes["im:id"]} className="bg-white p-4 rounded-md shadow">
                <div className="flex items-center">
                  <Image
                    src={app["im:image"][2].label}
                    alt={app["im:name"].label}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">{app["im:name"].label}</p>
                    <p className="text-xs text-gray-500">{app.category.attributes.label}</p>
                    <p className="text-xs text-yellow-500">排名: {index + 1}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
