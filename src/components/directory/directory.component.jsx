import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector} from 'reselect';
import {selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component';


const Directory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(({id, ...otherSectionProps }) => (
           <MenuItem key={id} {...otherSectionProps}/>
          ))
      }
  </div>
)

const maptStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(maptStateToProps)(Directory);