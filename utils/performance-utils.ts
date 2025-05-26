/**
 * Utility functions for monitoring and improving website performance
 */

/**
 * Defers the execution of a function until the browser is idle.
 * @param fn The function to defer.
 * @param timeout Optional timeout in milliseconds.
 */
export function deferExecution(fn: () => void, timeout = 1): void {
  if (typeof window === "undefined") {
    return
  }

  if (window.requestIdleCallback) {
    window.requestIdleCallback(
      () => {
        try {
          fn()
        } catch (error) {
          console.error("Error in deferred function:", error)
        }
      },
      { timeout },
    )
  } else {
    setTimeout(() => {
      try {
        fn()
      } catch (error) {
        console.error("Error in deferred function:", error)
      }
    }, timeout)
  }
}

/**
 * Executes tasks in smaller chunks to avoid blocking the main thread.
 * @param tasks An array of functions to execute.
 * @param chunkSize The number of tasks to execute in each chunk.
 * @param delay The delay between each chunk in milliseconds.
 */
export function executeTasksInChunks(tasks: (() => void)[], chunkSize: number, delay: number): void {
  if (typeof window === "undefined") {
    return
  }

  function processChunk(index: number) {
    const end = Math.min(index + chunkSize, tasks.length)
    for (let i = index; i < end; i++) {
      try {
        tasks[i]()
      } catch (error) {
        console.error("Error executing task:", error)
      }
    }

    if (end < tasks.length) {
      setTimeout(() => {
        processChunk(end)
      }, delay)
    }
  }

  processChunk(0)
}
