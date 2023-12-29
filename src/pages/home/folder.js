import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const folder = [

];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        folder.push({
            "Name": `Folder ${i}`,
            "Size": `${i} GB`,
            "Modified": `${i % 10} Day ago`,
        });
    } else {
        folder.push({
            "Icon": <FontAwesomeIcon icon={faHome} />,
            "Name": `Folder ${i}`,
            "Size": `${i} MB`,
            "Modified": `a month ago`,
        });
    }
}

export const contextMenuItems = [
    {
      text: 'Share',
      items: [
        { text: 'Facebook' },
        { text: 'Twitter' }],
    },
    { text: 'Download' },
    { text: 'Comment' },
    { text: 'Favorite' },
  ];




