interface BlogCardProps {
  title: string
  date: string
  description: string
}

const interStyle = { fontFamily: "var(--font-inter), sans-serif" }

const BlogCard = ({ title, date, description }: BlogCardProps) => {
  return (
    <div className="w-full py-4 space-y-1 group hover:cursor-pointer" style={interStyle}>
      <div className="flex justify-center gap-2 items-end relative">
        <div className="text-xl font-bold whitespace-nowrap text-black group-hover:text-black/50 transition-all duration-300">{title}</div>
        <span className="w-full border-b border-dashed border-black/20 group-hover:border-black/40 mb-[6px] transition-all duration-300"></span>
        <div className="text-black/40 whitespace-nowrap uppercase text-xs group-hover:text-black/60 transition-all duration-300">{date}</div>
      </div>
      <div className="text-black/50 text-base group-hover:text-black/70 transition-all duration-300">{description}</div>
    </div>
  )
}

export default BlogCard
