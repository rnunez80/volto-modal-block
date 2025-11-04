import React from 'react';
import View from './View';
import { SidebarPortal } from '@plone/volto/components';
import Data from './Data';

const Edit = (props) => {
  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={props.selected}>
        <Data {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
