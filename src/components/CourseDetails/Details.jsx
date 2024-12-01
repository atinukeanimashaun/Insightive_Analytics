import React, { useReducer } from 'react';
import About from './About';
import Assessments from './Assessments';
import Syllabus from './Syllabus';
import Prerequisites from './Prerequisites';
import FAQ from './FAQ';

const initialState = { activeSection: 'About' };

function reducer(state, action) {
  switch (action.type) {
    case 'setActiveSection':
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}

const Details = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderContent = () => {
    switch (state.activeSection) {
      case 'About':
        return <About />;
      case 'Syllabus':
        return <Syllabus />;
      case 'Assessments':
        return <Assessments />;
      case 'Prerequisites':
        return <Prerequisites />;
      case 'FAQ':
        return <FAQ />;
      default:
        return null;
    }
  };

  const getButtonClasses = (section) => {
    const baseClasses = 'capitalize font-semibold px-2 md:px-4 py-2 transition-all duration-200 cursor-pointer whitespace-nowrap';
    const activeClasses = 'border-b-2 border-b-secondary text-secondary hover:text-secondary';
    const inactiveClasses = 'text-[#565656]';

    return `${baseClasses} ${state.activeSection === section ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="pb-8 md:pb-14 pt-[80px] px-6 xl:px-20">
      <div className="flex md:justify-center md:items-center space-x-2 overflow-x-scroll scrollbar-hide">
        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'About' })}
          className={getButtonClasses('About')}
        >
          About
        </button>

        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'Syllabus' })}
          className={getButtonClasses('Syllabus')}
        >
          Syllabus
        </button>

        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'Assessments' })}
          className={getButtonClasses('Assessments')}
        >
          Assessments
        </button>

        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'Prerequisites' })}
          className={getButtonClasses('Prerequisites')}
        >
          Prerequisites
        </button>

        <button
          onClick={() => dispatch({ type: 'setActiveSection', payload: 'FAQ' })}
          className={getButtonClasses('FAQ')}
        >
          FAQ
        </button>
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Details;
