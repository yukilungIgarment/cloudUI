import React, { useState } from 'react';
import './profile.scss';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, {
  Button, Column,
} from 'devextreme-react/data-grid';
import { folder, contextmenu } from '../home/folder';
import { Scrolling, LoadPanel } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import 'devextreme/ui/text_box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHardDrive } from '@fortawesome/free-solid-svg-icons'
import ContextMenu, { ContextMenuTypes } from 'devextreme-react/context-menu';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



export default function Home() {
  const actions = [
    { text: 'Upload File', icon: 'upload' },
    { text: 'New Folder', icon: 'folder' },
  ];



  return (
    <React.Fragment>
      <div className={'content-block'}>
        <Toolbar>
          <Item location='before' >
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <i className="fas fa-home"></i>
                <li className="breadcrumb-item"><a href="#"><FontAwesomeIcon icon={faHardDrive} /> Public Space 1</a></li>            </ol>
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
            <Column dataField="Name">
            </Column>
            <Column dataField="Size" />
            <Column dataField="Modified" />
            <Column type="buttons" width={110} >
              <Button hint="Download" icon="overflow" >
              </Button>
            </Column>
          </DataGrid>
        </div>
        <ContextMenu dataSource={contextmenu} target="#table" />
      </div>
    </React.Fragment>
  )
}