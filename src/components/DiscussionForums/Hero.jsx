import React from 'react'

const Hero = () => {
  return (
    <div className="py-8 md:pt-14 px-6 xl:px-20">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] xl:text-[56px] font-[600] text-black pb-2">
          Discussion Forums
        </h2>

        <div className="text-black text-[16px] md:text-[24px] text-left space-y-4 md:space-y-8 mt-10">
          <p>
            This is a central index of all the discussion forums available to you at PolicyAnalysisLab.com. These forums are designed to provide members with a means for asking questions, sharing resources and engaging with others in the community. Our hope is that the forums will provide a central hub where members can exchange ideas, insights, and resources relevant to applied policy analysis.

          </p>

          <p>
            Whatever the topic of discussion, please remember, PolicyAnalysisLab.com is a global community made up of public policy experts from all walks of life and experience levels: So, make sure to keep your posts, respectful, constructive, and relevant to the topics at hand.

          </p>

          <p>
            We strongly discourage any form of personal attacks, derogatory language, or harmful comments targeting individuals or groups. We value healthy discussions and debates, and we encourage all our members to share their views.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Hero
