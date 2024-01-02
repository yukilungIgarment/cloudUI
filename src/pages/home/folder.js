import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { dxItem } from 'devextreme/ui/widget/ui.widget';



export const folder = [
    {   
        "Name": "Folder 1",
        "Size": "1 GB",
        "Modified": "1 Day ago",
    },
    {
        "Name": "Folder 2",
        "Size": "1 GB",
        "Modified": "1 Day ago",
    },
    {
        "Name": "Folder 3",
        "Size": "1 GB",
        "Modified": "1 Day ago",
    },
];

export const contextmenu = [
    { text: 'Download', icon: 'download' },
    { text: 'Copy', icon: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#231916" d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>' },
  ];























// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         folder.push({
//             "Name": `Folder ${i}`,
//             "Size": `${i} GB`,
//             "Modified": `${i % 10} Day ago`,
//         });
//     } else {
//         folder.push({
//             "Icon": <FontAwesomeIcon icon={faHome} />,
//             "Name": `Folder ${i}`,
//             "Size": `${i} MB`,
//             "Modified": `a month ago`,
//         });
//     }
// }




