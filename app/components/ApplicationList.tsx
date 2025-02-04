import Image from "next/image"
import { Application } from "@/types/application"
import { Button } from "antd"

type ApplicationListProps = {
  applications: Application[]
  currentPage: number
  pageSize: number
}

const getAppLink = (link: Application["link"]) => {
  return (
    (Array.isArray(link) ? link : link ? [link] : []).find((l) => l?.attributes?.rel === "alternate")?.attributes
      ?.href ?? "#"
  )
}

const ApplicationList = ({ applications, currentPage, pageSize }: ApplicationListProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">應用程式列表</h2>
      <ul className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {applications.map((app, index) => (
          <a key={app.id.attributes["im:id"]} href={getAppLink(app.link)} target="_blank" rel="noopener noreferrer">
            <li className="bg-white p-4 rounded-md shadow flex justify-between items-center">
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
                  <p className="text-xs text-yellow-500">排名: {(currentPage - 1) * pageSize + index + 1}</p>
                </div>
              </div>
              <Button color="primary" variant="solid" shape="round">
                取得
              </Button>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}

export default ApplicationList
