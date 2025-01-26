import Image from "next/image"
import { Recommendation } from "@/types/application"

type RecommendationsProps = {
  applications: Recommendation[]
}

const Recommendations = ({ applications }: RecommendationsProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">推薦應用程式</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {applications.map((app) => (
          <div key={app.id.attributes["im:id"]} className="flex-shrink-0 w-48 bg-white p-4 rounded-lg shadow">
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
