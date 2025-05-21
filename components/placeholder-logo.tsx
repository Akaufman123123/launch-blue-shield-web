interface PlaceholderLogoProps {
  name: string
  width?: number
  height?: number
  className?: string
}

export default function PlaceholderLogo({ name, width = 160, height = 64, className = "" }: PlaceholderLogoProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 rounded ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className="text-gray-700 text-sm font-medium text-center px-2">{name}</span>
    </div>
  )
}
