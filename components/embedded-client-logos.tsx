export default function EmbeddedClientLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Trusted by Leading Medical Organizations</h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Client logos with embedded Base64 images */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <div className="text-center font-bold text-blue-600 text-xl">AchieversABA</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <div className="text-center font-bold text-blue-800 text-xl">CLARITY</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <div className="text-center font-bold text-teal-600 text-xl">SBH Laboratories</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <div className="text-center font-bold text-teal-700 text-xl">JADE CAPITAL</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 w-64">
            <div className="text-center font-bold text-amber-600 text-xl">ATLAS HEALTHCARE</div>
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
