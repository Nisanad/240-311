//คำนวณพื้นที่ สี่เหลี่ยมจัตุรัส
function square(sideX) {
    return (sideY) => {
       
          return sideX * sideY ; //ด้าน*ด้าน
  
   };
  }
  console.log(square(5)(5)) //25
  