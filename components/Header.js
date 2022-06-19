import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
  HomeIcon,
  LightningBoltIcon,
  CollectionIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png"
        width={200}
        height={100}
        alt="Hulu Logo"
      />
    </header>
  )
}

export default Header
