import React, { useReducer } from 'react';
import About from './About';
import Resources from './Resources';
import Videos from './Videos';

const initialState = { activeSection: 'About' };

function reducer(state, action) {
  switch (action.type) {
    case 'setActiveSection':
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}

const ValueDetail = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Map section names to components for cleaner rendering
  const renderContent = () => {
    const sections = {
      About: <About />,
      Videos: <Videos />,
      Resources: <Resources />,
    };

    return sections[state.activeSection] || null;
  };

  // Dynamic classes for active/inactive buttons
  const getButtonClasses = (section) => {
    const baseClasses =
      'capitalize font-semibold px-4 py-2 transition-all duration-200 cursor-pointer';
    const activeClasses =
      'border-b-2 border-b-secondary text-secondary hover:text-secondary';
    const inactiveClasses = 'text-[#565656] border-b-2 border-b-[#EDEDED]';

    return `${baseClasses} ${
      state.activeSection === section ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <div className="pb-8 md:pb-14 pt-[80px] px-6 xl:px-20">
      {/* Navigation Buttons */}
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'About' })}
          className={getButtonClasses('About')}
        >
          About
        </button>

        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'Videos' })}
          className={getButtonClasses('Videos')}
        >
          Videos
        </button>

        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'Resources' })}
          className={getButtonClasses('Resources')}
        >
          Resources
        </button>
      </div>

      {/* Render Dynamic Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ValueDetail;
