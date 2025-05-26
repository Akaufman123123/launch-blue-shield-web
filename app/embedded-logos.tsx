"use client"

import { useEffect, useState } from "react"

export default function EmbeddedLogos() {
  const [isClient, setIsClient] = useState(false)
  const [renderCount, setRenderCount] = useState(0)

  // Force re-render on client side
  useEffect(() => {
    setIsClient(true)
    setRenderCount((prev) => prev + 1)

    // Log that this component has mounted
    console.log("EmbeddedLogos mounted", { renderCount: renderCount + 1, time: new Date().toISOString() })

    // Force re-render after a short delay
    const timer = setTimeout(() => {
      setRenderCount((prev) => prev + 1)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Generate a unique ID for this render to prevent caching
  const uniqueId = isClient ? Date.now().toString() : "server"

  return (
    <section className="py-16 bg-gray-50" id={`logos-section-${uniqueId}`} data-render-count={renderCount}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Providing exceptional IT services to healthcare organizations and businesses across various industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* AchieversABA */}
          <div
            className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-32"
            data-component="logo-card"
          >
            <div style={{ color: "#0066cc", fontWeight: "bold", fontSize: "20px" }}>
              {isClient ? `AchieversABA (${uniqueId.slice(-4)})` : "AchieversABA"}
            </div>
          </div>

          {/* Clarity */}
          <div
            className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-32"
            data-component="logo-card"
          >
            <div style={{ color: "#1a365d", fontWeight: "bold", fontSize: "22px" }}>
              {isClient ? `CLARITY (${uniqueId.slice(-4)})` : "CLARITY"}
            </div>
          </div>

          {/* SBH Laboratories */}
          <div
            className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-32"
            data-component="logo-card"
          >
            <div style={{ color: "#2c7a7b", fontWeight: "bold", fontSize: "18px" }}>
              {isClient ? `SBH Laboratories (${uniqueId.slice(-4)})` : "SBH Laboratories"}
            </div>
          </div>

          {/* Jade Capital */}
          <div
            className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-32"
            data-component="logo-card"
          >
            <div style={{ color: "#2f855a", fontWeight: "bold", fontSize: "20px" }}>
              {isClient ? `Jade Capital (${uniqueId.slice(-4)})` : "Jade Capital"}
            </div>
          </div>

          {/* Atlas Healthcare Group */}
          <div
            className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-32"
            data-component="logo-card"
          >
            <div style={{ color: "#b7791f", fontWeight: "bold", fontSize: "18px", textAlign: "center" }}>
              {isClient ? `Atlas Healthcare\nGroup (${uniqueId.slice(-4)})` : "Atlas Healthcare\nGroup"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
