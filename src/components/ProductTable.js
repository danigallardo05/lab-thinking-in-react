import ProductRow from './ProductRow';


const ProductTable = (props) => {

    


    return (
        <div>
            <table>
            <thead>
                <tr >
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {/* <ProductRow/> */}

            {props.productsArr.map(eProduct =>{
                return (
                    <ProductRow eProduct={eProduct}/>
                )
            })}
            </table>
        </div>
    );
}

export default ProductTable;
