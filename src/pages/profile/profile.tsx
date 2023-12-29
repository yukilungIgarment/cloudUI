import React, { useState } from 'react';
import './profile.scss';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, {
  Button, Column, 
} from 'devextreme-react/data-grid';
import { folder } from '../home/folder';
import {  Scrolling, LoadPanel } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import 'devextreme/ui/text_box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


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
                <li className="breadcrumb-item"><a href="#"><FontAwesomeIcon icon={faHome}  color="$base-text-color" size="1x"/> Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Public Space 1</li>
              </ol>
            </nav>
          </Item>
          <Item 
            widget="dxDropDownButton"
            location="after"
            options={{
              items: actions,
              icon: 'plus',
              dropDownOptions: { width: 200 }
            }} />
        </Toolbar>
        <DataGrid dataSource={folder} height={440} showBorders={true}>
          <Scrolling mode="infinite" />
          <LoadPanel enabled={false} />

          <Column dataField="Name" />
          <Column dataField="Size" />
          <Column dataField="Modified" />
          <Column type="buttons" width={110} >
            <Button hint="Download" icon="download" />
          
      </Column>
        </DataGrid>
      </div>
    </React.Fragment>
  )
}