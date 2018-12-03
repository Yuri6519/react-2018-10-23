import React from 'react';
import { List } from 'react-virtualized';


// List data as an array of strings
const list = [
 'Easy windowing 1',
 'Easy windowing 2',
 'Easy windowing 3',
 'Easy windowing 4',
 'Easy windowing 5',
 'Easy windowing 6',
 'Easy windowing 7',
 'Easy windowing 8',
 'Easy windowing 9',
 'Easy windowing 10',
 'Easy windowing 11',
 'Easy windowing 12',
 'Easy windowing 13',
 'Easy windowing 14',
 'Easy windowing 15',
 'Easy windowing 16',
 'Easy windowing 17',
 'Easy windowing 18',
 'Easy windowing 19',
 'Easy windowing 20',
 // And so on...
];
 
function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // Used for performance
    isVisible, // Used for performancee
    style, // Style object to be applied to row (to position it)
 }) {

    //console.log('rowRenderer::HEREHEREHEREHERE')

    return (
    
        <div key={key} style={style}>
            {list[index]}
        </div>
    
    );
}
 
// Render your list
const ListExample = () => (
  <>
  <div>&nbsp;</div>  
  <section>
    <List 
        width={500} 
        height={150} 
        rowCount={list.length} 
        rowHeight={25} 
        rowRenderer={rowRenderer} 
    />
  </section>
  </>
);

export default ListExample