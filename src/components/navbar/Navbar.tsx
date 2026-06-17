import DarkButton from "./DarkButton"
import { Go } from "@/components/icons/Go_logo"
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3">
      <Go className="w-14 h-14" />
      <DarkButton />
    </nav>
  )
}

export default Navbar