
const Loading: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-600 border-solid"></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loading