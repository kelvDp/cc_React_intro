import React, {Component} from "react";
import Product from "./OneProduct";


// function Products() {
//     return (
//         <div>
//             <h2>Products</h2>
//             <h2>Courses</h2>
//         </div>
//     );
// } -- my version

// class Products extends Component {
//     render() {
//         return(
//             <div>
//                 <h2>Products</h2>
//                 <h2>Courses</h2>
//             </div>
//         );
//     }
// }

// in this version it looks like you define all your vars and functions inside of the render method 
// and then you can use it in the return 

// class Products extends Component {
//     render() {
//         const products = ["Learning React", "Pro React", "Beginning React"];
//         const listProducts = products.map(product => <li>{product}</li>
//             );
//         return(
//             <div>
//                 <ul>{listProducts}</ul>
//             </div>
//         );
//     }
// }

class Products extends Component {
    
    constructor(props) {
        super(props);
        this.products = this.getProducts(); // assigns an array to this.products
    }

    getProducts() {
        return [
        { 
            imageUrl: "http://loremflickr.com/150/150?random=1",
            productName: "Product 1",
            releasedDate: "May 31, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
            rating: 4,
            numOfReviews: 2
        },
        { 
            imageUrl: "http://loremflickr.com/150/150?random=2",
            productName: "Product 2",
            releasedDate: "October 31, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
            rating: 2,
            numOfReviews: 12          
        },
        { 
            imageUrl: "http://loremflickr.com/150/150?random=3",
            productName: "Product 3",
            releasedDate: "July 30, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
            rating: 5,
            numOfReviews: 2
        }];
    }    

    render() {
        const listProducts = this.products.map(product => <Product key={product.productName} data={product} />);
        return(
            <div>
                {/* {listProducts.length > 0 && <ul>{listProducts}</ul>}
                {listProducts.length === 0 && <ul>No products to display</ul>} */}
                {listProducts.length > 0 ? <ul>{listProducts}</ul> : <ul>No Products to show</ul>}
            </div>
        );
    }
}

export default Products;