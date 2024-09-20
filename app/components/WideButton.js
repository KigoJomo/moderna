'use client'
import Image from 'next/image'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const WideButton = ({ src, text, light = false }) => {
  return (
    <button
      className={`w-fit h-fit flex items-center gap-4 rounded-full p-2 pr-4 ${
        light ? 'bg-secondary' : 'bg-primary'
      }`}
    >
      <Image
        src={src}
        alt={text}
        width={100}
        height={100}
        className="w-9 aspect-square rounded-full"
      />
      <p className={`capitalize ${light ? 'text-primary' : 'text-secondary'}`}>
        {text}
      </p>

      <ArrowForwardIcon className={`${light ? 'icon-black' : 'icon-white'}`} fontSize='small' />
    </button>
  )
}

export default WideButton
