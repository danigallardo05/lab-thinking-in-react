import React from 'react';
import jsonData from './../data.json'



const ProductRow = (props) => {

const {name, price, inStock} = props.eProduct

    

    return (

        
         <tbody>
             {/* {jsonData.map(e => {
                 return ( */}
                    <tr>

                        <td style={{color: inStock ? 'black' : 'red'}}>{name}</td>
                        <td>{price}</td>

                    </tr>
                 {/* )
             })} */}
         </tbody>

    );
}

export default ProductRow;
