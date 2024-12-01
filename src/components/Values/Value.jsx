import React, { useReducer } from 'react'
import RForInsightive from './RForInsightive';
import RForPart from './RForPart';
import RToIntroduction from './RToIntroduction';
import RForTip from './RForTip';
import SideBar from './SideBar';

const initialState = { activeSection: 'RForInsightive' };

function reducer(state, action) {
  switch (action.type) {
    case 'setActiveSection':
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}


const Value = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderContent = () => {
    switch (state.activeSection) {
      case 'RForInsightive':
        return <RForInsightive />;
      case 'RForPart':
        return <RForPart />;
      case 'RToIntroduction':
        return <RToIntroduction />;
      case 'RForTip':
        return <RForTip />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="flex-1 p-4 md:p-8">
        <div className="mt-4">
          {renderContent()}
        </div>
      </div>

      <SideBar activeSection={state.activeSection} dispatch={dispatch} />
    </div>
  )
}

export default Value