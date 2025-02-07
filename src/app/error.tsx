'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="bg-stone-900 flex text-white flex-col justify-center items-center min-h-screen w-full border">
      <h2 className="text-2xl">Something went wrong!</h2>
      <button
        className="bg-gray-700 px-3 py-2 rounded-sm my-8"
        onClick={() => reset()} // Try to re-render the segment
      >
        Try again
      </button>
    </div>
  )
}
