type SearchProps = {
  onSearch: (query: string) => void
}

const Search = ({ onSearch }: SearchProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <div className="sticky top-0 bg-gray-100 z-10 shadow-md mb-4 rounded-md">
      <input
        type="text"
        placeholder="搜尋"
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  )
}

export default Search
