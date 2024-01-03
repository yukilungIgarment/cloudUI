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
import { DropDownButton } from "devextreme-react";



export default function Home() {
  const actions = [
    { text: 'Upload File', icon: 'upload' },
    { text: 'New Folder', icon: 'folder' },
  ];



  return (
    <React.Fragment>
      <div className={'content-block'}>
        <div className={'justify-between'}>
          <div>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <i className="fas fa-home"></i>
                <li className="breadcrumb-item"><a href="#"><FontAwesomeIcon icon={faHardDrive} /> Public Space 1</a></li>            </ol>
            </nav>
          </div>
          <div>
            <DropDownButton 
                icon="plus" items={actions} width={200} id="tablebutton"/>
          </div>
        </div>
        <div id="table">
        <table className="table " id="profiletable">
            <tbody>
              <tr id="header">
                <td >Name</td>
                <td >Size</td>
                <td>Modified</td>
                <td></td>
              </tr>

              <tr>
                <td> <Link to="/tasks"><FontAwesomeIcon icon={faFolder} size="lg" style={{ color: "#5f6368", }} /> &nbsp;&nbsp;Folder A </Link></td>
                <td> <Link to="/tasks">1 GB</Link></td>
                <td> <Link to="/tasks">a Day ago</Link></td>
                <td className="text-center"> <FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>

              <tr>
                <td><FontAwesomeIcon icon={faFolder} size="lg" style={{ color: "#5f6368", }} />&nbsp;&nbsp;Folder B</td>
                <td>1 MB</td>
                <td>a Day ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faFolder} size="lg" style={{ color: "#5f6368", }} />&nbsp;&nbsp;Folder C</td>
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