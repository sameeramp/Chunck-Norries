import React from 'react'

function Error() {
    return (
        <div className="flex items-center justify-center ">
        <div className="error-indicator bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </div>
    )
}

export default Error
