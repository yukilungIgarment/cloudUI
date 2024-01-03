import React, { useState } from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, {
  Button, Column, 
} from 'devextreme-react/data-grid';
import { folder, contextmenu } from '../home/folder';
import {  Scrolling, LoadPanel } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import 'devextreme/ui/text_box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faFileWord, faFilePowerpoint,faFileExcel, faFile } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ContextMenu, { ContextMenuTypes } from 'devextreme-react/context-menu';
import { DropDownButton } from "devextreme-react";

export default function Task() {

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
              <li className="breadcrumb-item"><a href="#"><FontAwesomeIcon icon={faHome}  color="$base-text-color" size="1x"/> Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Folder A</li>
            </ol>
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
                <td><FontAwesomeIcon icon={faFileWord} size="lg" style={{color: "#4285f4",} } />&nbsp;&nbsp;Word.doc</td>
                <td>1 GB</td>
                <td>a Day ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
              <tr>
              <td><FontAwesomeIcon icon={faFileWord} size="lg" style={{color: "#4285f4",}} />&nbsp;&nbsp;Word.doc</td>
                <td>1 MB</td>
                <td>a month ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
              <tr>
              <td><FontAwesomeIcon icon={faFilePowerpoint} size="lg" style={{color: "#f4b400",}} />&nbsp;&nbsp;Powerpoint.ppt</td>
                <td >1 MB</td>
                <td>a month ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
              <tr>
              <td><FontAwesomeIcon icon={faFileExcel} size="lg" style={{color: "#249d58",}} />&nbsp;&nbsp;Excel.xlxs</td>
                <td >1 MB</td>
                <td>a month ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
              <tr>
              <td><FontAwesomeIcon icon={faFileExcel} size="lg" style={{color: "#249d58",}} />&nbsp;&nbsp;Excel.xlxs</td>
                <td >1 MB</td>
                <td>a month ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
              <tr>
              <td><FontAwesomeIcon icon={faFile} size="lg" style={{color: "#adadad",}} />&nbsp;&nbsp;other.exe</td>
                <td >10 GB</td>
                <td>a year ago</td>
                <td className="text-center"><FontAwesomeIcon icon={faEllipsisVertical} /></td>
              </tr>
            </tbody>
          </table>
      </div>
      <ContextMenu dataSource={contextmenu} target="#table"  />
    </div>
  </React.Fragment>
)}
