import React, { useState } from "react";
import DataGrid, {
  Button, Column, 
} from 'devextreme-react/data-grid';
import { folder, contextMenuItems as items } from './folder';
import {  Scrolling, LoadPanel } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ContextMenu, { ContextMenuTypes } from 'devextreme-react/context-menu';

export default function Home() {
  const actions = [
    { text: 'Upload File', icon: 'upload' },
    { text: 'New Folder', icon: 'folder' },
  ];

  const contextmenu = [
    { text: 'Download', icon: 'download' },
    { text: 'Copy', icon: 'folder' },
  ];

  return (
    <React.Fragment>
      <div className={'content-block'}>
        <Toolbar>
          <Item location='before' >
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <i className="fas fa-home"></i>
                <li className="breadcrumb-item"><a href="#"><FontAwesomeIcon icon={faHome}  color="$base-text-color" size="1x"/> Home</a></li>
              </ol>
            </nav>
          </Item>
          <Item 
            widget="dxDropDownButton"
            location="after"
            options={{
              items: actions,
              icon: 'plus',
              text: 'New',
              dropDownOptions: { width: 200 }
            }} />
        </Toolbar>
        <div id="table">
        <DataGrid dataSource={folder} height={440} showBorders={true}>
          <Scrolling mode="infinite" />
          <LoadPanel enabled={false} />
          <Column dataField="Name" />
          <Column dataField="Size" />
          <Column dataField="Modified" />
          <Column type="buttons" width={110} >
            <Button hint="Download" icon="overflow" />
          </Column>
        </DataGrid>
        </div>
        <ContextMenu dataSource={contextmenu} target="#table" width={200} />
      </div>
    </React.Fragment>
  )
}