import Image from "next/image"
import { useState, useEffect } from "react"
import axios from "axios"
import { Recommendation } from "@/types/application"

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get("https://itunes.apple.com/tw/rss/topgrossingapplications/limit=10/json")
        setRecommendations(response.data.feed.entry)
        console.log("rec", response)
      } catch (error) {
        console.error("請求失敗:", error)
      }
    }

    fetchRecommendations()
  }, [])

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">推薦</h2>
      <div className="grid grid-cols-4 gap-4">
        {recommendations.map((app) => (
          <div className="bg-white p-4 rounded-lg shadow" key={app.id.attributes["im:id"]}>
            <Image
              src={app["im:image"][2].label}
              alt={app["im:name"].label}
              width={64}
              height={64}
              className="h-16 w-16 mx-auto"
            />
            <p className="text-center text-sm font-medium mt-2">{app["im:name"].label}</p>
            <p className="text-center text-xs text-gray-500">{app.category.attributes.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendations
