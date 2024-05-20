import React from 'react'

export const Overlay = ({ title, content}) => {
  return (
    <div className="bg-gray-500 bg-opacity-40 text-white p-16 rounded-lg text-center max-w-6xl h-96">
      <h1 className="text-6xl font-bold mb-8">{title}</h1>
      <p className="text-xl ">
      {content}
      </p>
    </div>
  )
}
