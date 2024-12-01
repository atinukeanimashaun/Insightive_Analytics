import React from 'react'

const SideBar = ({ activeSection, dispatch }) => {
  const sections = [
    { id: 'RForInsightive', label: 'An Introduction to R for Policy Analysis' },
    { id: 'RForPart', label: 'Tips for learning R as part of this course' },
    { id: 'RToIntroduction', label: 'An Introduction to R for Policy Analysis' },
    { id: 'RForTip', label: 'Tips for learning R as part of this course' },
  ];

  const getButtonClasses = (section) => {
    const baseClasses = 'capitalize font-semibold pt-5 pb-2 transition-all duration-200 cursor-pointer text-start';
    const activeClasses = 'text-secondary hover:text-secondary';
    const inactiveClasses = 'text-black';

    return `${baseClasses} ${activeSection === section ? activeClasses : inactiveClasses}`;
  };

  return (
       <div className="flex flex-row lg:flex-col items-start gap-4 px-2 md:px-10 lg:px-2 lg:divide-y-2 lg:divide-[#DBDBDB] bg-[#EEF6FF] text-black lg:w-[300px] lg:h-screen overflow-auto lg:overflow-visible">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => dispatch({ type: 'setActiveSection', payload: section.id })}
          className={`${getButtonClasses(section.id)} overflow-hidden text-ellipsis whitespace-nowrap lg:whitespace-normal`}
        >
          {section.label}
        </button>
      ))}
    </div>
  )
}

export default SideBar
