import React, { useState, } from 'react';
import './Sidebar.css';
import sidebar from '../../../constants/sidebar';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import { faAngleRight, faAngleUp, } from '@fortawesome/free-solid-svg-icons';
function SidebarSection ({ setTitle, }) {

  return (
    <div id={'Sidebar'}>
      <div className={'user-info-container'}>
        <img
          src={process.env.PUBLIC_URL + 'assets/images/sidebar/logo.png'}
          alt={'logo'}
        />
        <div className={'user-info'}>
          <img
            src={process.env.PUBLIC_URL + 'assets/images/sidebar/avatar.png'}
            alt={'avatar'}
            className={'avatar'}
          />
          <div>
            <div className={'user-name'}>Christant</div>
            <div className={'user-role'}>Admin</div>
          </div>
          <FontAwesomeIcon icon={faAngleRight} style={{
            marginTop: '10px',
            float: 'right',
          }}/>
        </div>
      </div>
      <div className={'menu-container'}>
        {sidebar.map((value) => (
          <MenuItem key={value.id} menuItem={value} setTitle={setTitle}/>
        ))}
      </div>
    </div>
  );
}

function MenuItem({ menuItem, setTitle, }) {
  const [showSubs, setShowSubs, ] = useState(false);

  return (
    <div className={showSubs ? 'Menu-Item show-subs' : 'Menu-Item'} >
      <div className={'menu-main'} onClick={() => setShowSubs(!showSubs)}>
        <FontAwesomeIcon className={'menu-item-logo'} icon={menuItem.logo} />
        <span className={'menu-label'}>{menuItem.label}</span>
        <FontAwesomeIcon className={'arrow-icon'} style={{
          float: 'right',
          margin: '5px',
        }} icon={faAngleUp} />
      </div>
      <div className={'sub-menu-container'}>
        {menuItem?.subs?.map((item) => <SubMenuItem key={item.id} subItem={item} setTitle={setTitle}/>)}
      </div>
    </div>
  );
}

function SubMenuItem({ subItem, setTitle, }) {
  const handleClick = () => {
    setTitle(subItem.label);
  };

  return (
    <div className={'Sub-Item sub-menu-label'} onClick={handleClick}>
      {subItem.label}
    </div>
  );
}

SubMenuItem.propTypes = {
  subItem: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
};

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
};

SidebarSection.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default SidebarSection;