import React from 'react'
import WideButton from './WideButton'
import Image from 'next/image'
import Arrow from './Arrow'

const Hero = () => {
  const images = ['chair2', 'chair3', 'chair4']

  return (
    <section className="flex flex-col items-center justify-between">
      <h1 className="text-[20vw] leading-[13vw] font-bold">moderna</h1>

      <div className="w-full h-full flex items-end gap-4">
        <div className="w-1/5 h-full flex flex-col justify-end gap-32">
          <WideButton src={'/images/vlogger.webp'} text={'talk with us'} />

          <p>
            We believe that furniture is more than just functional pieces;
            it&apos;s a reflection of your style, taste and peronality.
          </p>
        </div>

        <div className="w-3/5 h-full max-h-[26rem] flex-grow-0 flex items-end">
          <Image
            alt="moderna chair"
            src="/images/chair1.png"
            width={500}
            height={500}
            className="h-[120%] object-contain"
          />
        </div>

        <div className="w-1/5 h-full flex flex-col items-center justify-end">
          <div className="w-fit h-fit flex flex-col items-center justify-end gap-4 relative">

            <div className="absolute top-[50%] -translate-y-[50%] -left-3">
              <Arrow left />
            </div>
            {images.map((image) => (
              <Image
                key={image}
                alt={image}
                src={`/images/${image}.png`}
                width={500}
                height={500}
                className="object-contain bg-tertiary h-28 w-28 p-2"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
