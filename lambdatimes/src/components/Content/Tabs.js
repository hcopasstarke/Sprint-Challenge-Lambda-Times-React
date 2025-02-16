import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, i) => (
        <Tab key={i} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />
        ))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}


export default Tabs;
