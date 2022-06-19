function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col justify-center items-center group cursor-pointer w-12 sm:w-20">
      <Icon className="h-8 mb-1 group-hover:animate-bounce transition duration-150" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100 transition hover:text-white">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
