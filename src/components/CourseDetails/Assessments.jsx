import React from 'react'

const Assessments = () => {
  return (
    <div className="md:px-6 xl:px-28">
      <h2 className="text-black text-[28px] md:text-[36px] capitalize">
        assessments
      </h2>

      <div className="pt-4 space-y-3">
        <p className="text-black text-[14px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <p className="text-black text-[14px] md:text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis eligendi perspiciatis quidem quasi, sunt sint consectetur voluptas debitis cupiditate dolores magnam, at quia incidunt! Quasi dolorem minima fugit distinctio!
        </p>

        <div className="pl-[15px]">
          <ol className="space-y-1 list-decimal	">
            <li>
              Suspendisse varius enim in eros elementum tristique.
            </li>
            <li>
              Suspendisse varius enim in eros elementum tristique.
            </li>
            <li>
              Suspendisse varius enim in eros elementum tristique.
            </li>
          </ol>
        </div>

        <p className="text-black text-[14px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
    </div>
  )
}

export default Assessments