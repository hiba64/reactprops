import React from 'react';
const ProductTable =(props)=>
{return(
    <table border="1">
        <tr>
            <th>category</th>
            <th>price</th>
            <th>name</th>
        </tr>
        {props.table.map(el=>
        <tr>
            
            <td>{el.category }</td>
            <td>{el.price}</td>
            <td>{el.name}</td>
        </tr>)}
    </table>
);}
export default ProductTable;