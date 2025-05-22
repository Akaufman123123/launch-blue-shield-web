export default function SvgClientLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Trusted by Leading Medical Organizations</h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* AchieversABA Logo - Simplified SVG */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="35" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#0066cc">
                AchieversABA
              </text>
              <circle cx="150" cy="25" r="15" fill="#ffcc00" />
            </svg>
          </div>

          {/* Clarity Logo - Simplified SVG */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="35" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#1a365d">
                CLARITY
              </text>
            </svg>
          </div>

          {/* SBH Laboratories Logo - Simplified SVG */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="35" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#2c7a7b">
                SBH Laboratories
              </text>
              <circle cx="25" cy="25" r="15" fill="#4fd1c5" opacity="0.5" />
            </svg>
          </div>

          {/* Jade Capital Logo - Simplified SVG */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="35" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#2f855a">
                JADE CAPITAL
              </text>
            </svg>
          </div>

          {/* Atlas Healthcare Logo - Simplified SVG */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="30" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#d69e2e">
                ATLAS
              </text>
              <text x="10" y="50" fontFamily="Arial" fontSize="14" fill="#718096">
                HEALTHCARE GROUP
              </text>
            </svg>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-600 max-w-2xl mx-auto">
          Join hundreds of medical practices that trust IT Launch with their technology needs. Our specialized IT
          solutions are designed for healthcare organizations of all sizes.
        </p>
      </div>
    </section>
  )
}
