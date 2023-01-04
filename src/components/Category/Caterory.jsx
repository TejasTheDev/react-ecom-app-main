import React from 'react'
import './Category.css';

const Category = () => {
  return (
    <div className="container">
      {/* <div className='head'>Category</div>
      <div className=''>Food grains</div> */}
      <ul className='head'>Category</ul>
      <ul><input type="checkbox" id="foodcrop" name="foodcrop" value="Car"/>Food crop</ul>
      <ul><input type="checkbox" id="commercial" name="commercial" value="Car"/>Commercial Crops</ul>
      <ul><input type="checkbox" id="plantation" name="plantation" value="Car"/>Plantation Crops</ul>
      <ul><input type="checkbox" id="horticulture" name="horticulture" value="Car"/>Horticulture</ul>
    </div>
  )
}

export default Category