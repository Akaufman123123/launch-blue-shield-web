/**
 * Breaks up long-running tasks into smaller chunks to avoid blocking the main thread
 * @param tasks Array of functions to execute
 * @param chunkSize Number of tasks to execute per chunk
 * @param delay Delay between chunks in milliseconds
 */
export function executeTasksInChunks<T>(tasks: (() => T)[], chunkSize = 5, delay = 0): Promise<T[]> {
  return new Promise((resolve) => {
    const results: T[] = []
    let index = 0

    function executeNextChunk() {
      const chunk = tasks.slice(index, index + chunkSize)
      index += chunkSize

      if (chunk.length === 0) {
        resolve(results)
        return
      }

      // Execute this chunk of tasks
      chunk.forEach((task) => {
        try {
          results.push(task())
        } catch (error) {
          console.error("Error executing task:", error)
        }
      })

      // Schedule the next chunk
      if (index < tasks.length) {
        setTimeout(executeNextChunk, delay)
      } else {
        resolve(results)
      }
    }

    // Start executing chunks
    executeNextChunk()
  })
}

/**
 * Defers non-critical JavaScript execution
 * @param fn Function to execute
 * @param delay Delay in milliseconds
 */
export function deferExecution(fn: () => void, delay = 0): void {
  if (typeof window !== "undefined") {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => setTimeout(fn, delay))
    } else {
      setTimeout(fn, delay)
    }
  }
}

/**
 * Loads a script dynamically
 * @param src Script source URL
 * @param async Whether to load the script asynchronously
 * @param defer Whether to defer script loading
 */
export function loadScript(src: string, async = true, defer = true): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = src
    script.async = async
    script.defer = defer
    script.onload = () => resolve()
    script.onerror = reject
    document.head.appendChild(script)
  })
}
