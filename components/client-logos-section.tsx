export default function ClientLogosSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted by Leading Medical Organizations</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {/* Use colored boxes with text instead of images */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
            <span className="font-semibold text-blue-800">AchieversABA</span>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
            <span className="font-semibold text-green-800">Clarity</span>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
            <span className="font-semibold text-purple-800">SBH Laboratories</span>
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
            <span className="font-semibold text-yellow-800">Jade Capital</span>
          </div>

          <div className="bg-red-100 p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
            <span className="font-semibold text-red-800">Atlas Healthcare</span>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600">
          Join hundreds of medical practices that trust IT Launch with their technology needs
        </p>
      </div>
    </section>
  )
}
