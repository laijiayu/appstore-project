type SearchProps = {
  onSearch: (query: string) => void
}

const Search = ({ onSearch }: SearchProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <div className="mb-6">
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
