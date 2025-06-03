import DarkButton from "./DarkButton"
function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">App</h1>
        <DarkButton />
    </nav>
  )
}

export default Navbar