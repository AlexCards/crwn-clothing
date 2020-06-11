import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import DirectoryMenuComponent from './directory.styles.jsx';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuComponent>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps}></MenuItem>;
      })}
    </DirectoryMenuComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
