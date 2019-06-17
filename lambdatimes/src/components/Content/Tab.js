import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => {
         return props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
}

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  handleTab:PropTypes.func
}

export default Tab;
