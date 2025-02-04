import Image from "next/image"
import { Recommendation } from "@/types/application"

type RecommendationsProps = {
  applications: Recommendation[]
}

const getAppLink = (link: Recommendation["link"]) => {
  return (
    (Array.isArray(link) ? link : link ? [link] : []).find((l) => l?.attributes?.rel === "alternate")?.attributes
      ?.href ?? "#"
  )
}

const Recommendations = ({ applications }: RecommendationsProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">推薦應用程式</h2>
      <div className="flex overflow-x-auto space-x-4">
        {applications.map((app) => (
          <a
            key={app.id.attributes["im:id"]}
            href={getAppLink(app.link)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-48 flex-shrink-0"
          >
            <div className="w-48 min-h-[180px] bg-white p-4 rounded-lg shadow flex flex-col justify-between">
              {/* App 圖片 */}
              <div className="flex justify-center">
                <Image
                  src={app["im:image"][2].label}
                  alt={app["im:name"].label}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-md"
                />
              </div>

              {/* App 名稱 */}
              <p className="text-center text-sm font-medium mt-2 truncate">{app["im:name"].label}</p>

              {/* 類別 */}
              <p className="text-center text-xs text-gray-500">{app.category.attributes.label}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Recommendations
