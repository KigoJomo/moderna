import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Arrow = ({ light = false, top, left, bottom }) => {
  return (
    <button className={`px-1 aspect-square rounded-full flex items-center justify-center hover:scale-125 ${light? 'bg-secondary' : 'bg-primary'}`}>
      <ArrowForwardIcon
        className={`${light ? 'icon-black' : 'icon-white'} ${left && 'rotate-180'} ${top && '-rotate-90'} ${bottom && 'rotate-90'} scale-75`}
        fontSize="small"
      />
    </button>
  )
}

export default Arrow
