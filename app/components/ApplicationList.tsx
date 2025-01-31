import Image from "next/image"
import { Application } from "@/types/application"

type ApplicationListProps = {
  applications: Application[]
  currentPage: number
  pageSize: number
}

const ApplicationList = ({ applications, currentPage, pageSize }: ApplicationListProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">應用程式列表</h2>
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
                <p className="text-xs text-yellow-500">排名: {(currentPage - 1) * pageSize + index + 1}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApplicationList
