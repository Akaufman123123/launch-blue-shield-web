import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/city-background-clean.jpeg"
          alt="City skyline at dusk"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-4 py-8 text-white">
        {/* Header with Logo */}
        <header className="flex items-center justify-center pt-8 md:pt-12">
          <div className="relative">
            <Image
              src="/images/jade-capital-logo.png"
              alt="Jade Capital Logo"
              width={220}
              height={31.31}
              className="object-contain"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center px-4 flex-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 md:mb-6 max-w-4xl leading-tight">
            This site is under construction
          </h2>
          <p className="text-lg md:text-xl font-normal opacity-90">Thank you for your patience!</p>
        </main>

        {/* Footer */}
        <footer className="pb-8 md:pb-12">
          <p className="text-sm md:text-base font-normal opacity-80">© Jade Capital 2025</p>
        </footer>
      </div>
    </div>
  )
}
