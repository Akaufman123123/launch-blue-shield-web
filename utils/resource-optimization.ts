/**
 * Utility functions for optimizing resource loading and reducing HTTP requests
 */

/**
 * Defers loading of non-critical CSS
 * @param href URL of the CSS file to load
 * @param media Media query for the CSS
 */
export function loadDeferredCSS(href: string, media = "all"): void {
  if (typeof window === "undefined") {
    return
  }

  // Create a link element for the CSS
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = href
  link.media = "print"
  link.setAttribute("onload", `this.media='${media}'`)

  // Add the link to the document
  document.head.appendChild(link)
}

/**
 * Combines multiple small CSS files into one request
 * @param cssFiles Array of CSS file URLs
 * @param callback Optional callback function to execute after loading
 */
export function combineCSS(cssFiles: string[], callback?: () => void): void {
  if (typeof window === "undefined" || cssFiles.length === 0) {
    return
  }

  // Create a single stylesheet element
  const style = document.createElement("style")
  style.type = "text/css"
  document.head.appendChild(style)

  // Load each CSS file and append its content to the style element
  let filesLoaded = 0

  cssFiles.forEach((file) => {
    fetch(file)
      .then((response) => response.text())
      .then((css) => {
        // Add the CSS content to the style element
        if (style.styleSheet) {
          // For IE
          ;(style.styleSheet as any).cssText += css
        } else {
          style.appendChild(document.createTextNode(css))
        }

        filesLoaded++

        // If all files are loaded, execute the callback
        if (filesLoaded === cssFiles.length && callback) {
          callback()
        }
      })
      .catch((error) => {
        console.error(`Error loading CSS file ${file}:`, error)

        filesLoaded++

        // If all files are loaded (even with errors), execute the callback
        if (filesLoaded === cssFiles.length && callback) {
          callback()
        }
      })
  })
}

/**
 * Defers loading of non-critical JavaScript
 * @param src URL of the JavaScript file to load
 * @param callback Optional callback function to execute after loading
 */
export function loadDeferredScript(src: string, callback?: () => void): void {
  if (typeof window === "undefined") {
    return
  }

  // Create a script element
  const script = document.createElement("script")
  script.src = src
  script.async = true

  // Add load event listener
  if (callback) {
    script.onload = callback
  }

  // Add the script to the document
  document.body.appendChild(script)
}

/**
 * Combines multiple small JavaScript files into one request
 * @param jsFiles Array of JavaScript file URLs
 * @param callback Optional callback function to execute after loading
 */
export function combineJS(jsFiles: string[], callback?: () => void): void {
  if (typeof window === "undefined" || jsFiles.length === 0) {
    return
  }

  // Create a single script element
  const script = document.createElement("script")
  script.type = "text/javascript"

  // Load each JavaScript file and append its content to the script element
  let filesLoaded = 0
  let combinedJS = ""

  jsFiles.forEach((file) => {
    fetch(file)
      .then((response) => response.text())
      .then((js) => {
        // Add the JavaScript content to the combined string
        combinedJS += `\n/* ${file} */\n${js}`

        filesLoaded++

        // If all files are loaded, add the combined JavaScript to the script element
        if (filesLoaded === jsFiles.length) {
          script.textContent = combinedJS
          document.body.appendChild(script)

          if (callback) {
            callback()
          }
        }
      })
      .catch((error) => {
        console.error(`Error loading JavaScript file ${file}:`, error)

        filesLoaded++

        // If all files are loaded (even with errors), add the combined JavaScript to the script element
        if (filesLoaded === jsFiles.length) {
          script.textContent = combinedJS
          document.body.appendChild(script)

          if (callback) {
            callback()
          }
        }
      })
  })
}

/**
 * Inlines critical CSS to reduce render-blocking resources
 * @param css CSS string to inline
 */
export function inlineCriticalCSS(css: string): void {
  if (typeof window === "undefined") {
    return
  }

  // Create a style element
  const style = document.createElement("style")
  style.type = "text/css"

  // Add the CSS content to the style element
  if (style.styleSheet) {
    // For IE
    ;(style.styleSheet as any).cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }

  // Add the style to the document head
  document.head.appendChild(style)
}
