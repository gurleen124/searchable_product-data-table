import './App.css';
import Searchbar from './searchbar';
import { useState } from 'react';
const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
function filterableProductTable({products}) {
  const [filterText , setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <Searchbar 
      filterText = {filterText}
      inStockOnly = {inStockOnly}/>
      <productTable
      products = {products}
      filterText = {filterText}
      inStockOnly = {inStockOnly} />
    </div>
  );
}
function productCategoryRow({category}) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
function productRow({product}) {
  const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function productTable({products}) {
  const rows = [];
  let lastCategory = null;
  products.forEach(product => {
    
  });
  products.forEach(product => {
    if (product.category != lastCategory) {
      rows.push(
        <productCategoryRow 
        category = {product.category}
        // key = {product.category} 
        />
      );
    }
    rows.push(
      <productRow
      product = {product}
      key = {product.name} />
    );
    lastCategory = product.category;
  });  
}
function App() {
  return (
    <div className="">
      <Searchbar />

    </div>
  );
}
export default App;
