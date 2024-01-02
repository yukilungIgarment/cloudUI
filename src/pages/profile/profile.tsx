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
import { faFolder } from '@fortawesome/free-solid-svg-icons'
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
        <table className="table " id="profiletable">
            <tbody>
                <th id="header">
                  <td >Name</td>
                  <td >Size</td>
                  <td>Modified</td>
                  <td></td>
                </th>
   
              <tr> 
                <td> <Link to="/tasks"><FontAwesomeIcon icon={faFolder} size="lg" style={{color: "#5f6368",}} /> &nbsp;&nbsp;Folder A </Link></td>
                <td> <Link to="/tasks">1 GB</Link></td>
                <td> <Link to="/tasks">a Day ago</Link></td>
                <td className="text-center">  <Link to="/tasks"><FontAwesomeIcon icon={faEllipsisVertical} /></Link></td>
              </tr>

              <tr>
              <td><FontAwesomeIcon icon={faFolder} size="lg" style={{color: "#5f6368",}} />&nbsp;&nbsp;Folder B</td>
                <td>1 MB</td>
                <td>a Day ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
              <tr>
              <td><FontAwesomeIcon icon={faFolder} size="lg" style={{color: "#5f6368",}} />&nbsp;&nbsp;Folder C</td>
                <td >1 MB</td>
                <td>a Day ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ContextMenu dataSource={contextmenu} target="#table" />
      </div>
    </React.Fragment>
  )
}