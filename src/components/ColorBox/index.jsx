import React, { useState } from "react";
import "./styles.scss";

function getRandomColor() {
  const color_list = ["green", "violet", "orange", "yellow", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5); //math.ramdom se la so thap phan nam tu 0 den 1 con math.trunc la chi lay phan nguyen => phan tu luon nho hon 5
  return color_list[randomIndex]; //cau nay co nghia la lay phan tu n trong day cac mau cua color_list
}

function ColorBox() {
  const initColor = localStorage.getItem("box-color" || "deeppink"); //cai nay neu khong la 1 cai nao trong sos mau kia thi no la deeping
  console.log(initColor);
  const [color, setColor] = useState(initColor);

  //     const [color, setColor] = useState(() => {
  //     const initColor = localStorage.getItem("box-color" || "deeppink"); //tất cả chỗ cmt này chỉ để cho cái thằng initColor chạy 1 lần thôi

  //     console.log(initColor);
  //     return initColor;
  //   });

  function HandleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor); //cái này nó sẽ chỉ làm công việc  là lưu cái màu hiện tại trên window thôi
    //còn t mà reload thì màu vẫn là deeping chư chưa thể là cái màu mà ta vừa reload
    //con dung getItem thi no se lay gia tri
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={HandleBoxClick}
    ></div>
  );
}

export default ColorBox;
