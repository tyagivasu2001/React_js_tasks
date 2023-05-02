import React from "react";
let arr = [];
const val = {
  category:["Nutrients", "Medicine"],
  price: [500, 700, 900],
  rating: [1, 2, 3, 4, 5],
};

// const arrval=Object.values(val);
// arrval.map((val1)=>{
//   console.log(val1);
//   val1.map((val2)=>{
//     console.log(val2);
//   })
// })

function Data(e, val) {
  if (e.target.checked == false) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === val) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    console.log("arr value are", arr);
  }
  if (e.target.checked == true) {
    arr.push(val);
    console.log("arr value are", arr);
  }
  console.log(e.target.checked);
}

const Productfilter = () => {
  return (
    <div>
      <h2>Filter</h2>
      <div>
      <p>Category</p>
        {val.category.map((Val, id) => {
          return (
            <div id="value" key={id}>
              {Val}
              <input
                type="checkbox"
                onClick={(e) => {
                  Data(e, Val);
                }}
              />
            </div>
          );
        })}
      </div>
      <div>
      <p>Price</p>
        {val.price.map((Val, id) => {
          return (
            <div id="value" key={id}>
               <h5>$ {Val}</h5>
              <input
                type="checkbox"
                onClick={(e) => {
                  Data(e, Val);
                }}
              />
            </div>
          );
        })}
      </div>
      <div>
      <p>Rating</p>
        {val.rating.map((Val, id) => {
          return (
            <div id="value" key={id}>
               <h5>{Val} Star</h5>
              <input
                type="checkbox"
                onClick={(e) => {
                  Data(e, Val);
                }}
              />
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default Productfilter;
