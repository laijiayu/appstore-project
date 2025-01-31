import React from "react"
import { Pagination } from "antd"

type PagePaginationProps = {
  currentPage: number
  pageSize: number
  total: number
  onPageChange: (page: number, pageSize: number) => void
}

const PagePagination = ({ currentPage, pageSize, total, onPageChange }: PagePaginationProps) => {
  return (
    <div className="flex justify-center mt-6">
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={total}
        showSizeChanger
        onChange={onPageChange}
        pageSizeOptions={[10, 50, 100]}
      />
    </div>
  )
}

export default PagePagination
