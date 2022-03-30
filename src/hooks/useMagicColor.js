import { useState, useEffect, useRef } from "react";

//ham nay ngau nhieu dau tien de mau xanh khi ta render
function randomColor(currentcolor) {
  const Color_List = ["red", "violet", "black", "blue", "pink"];

  const currentIndex = Color_List.indexOf(currentcolor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  console.log(Color_List[newIndex]);
  return Color_List[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorUseRef = useRef("transparent"); //giu gia tri sau khi re-render

  useEffect(() => {
    const colorInterval = setInterval(() => {
      //minh se can 1 ham de ngau nhieu khi render co 1 mau
      //neu colorUseRef thi ta se nhan vao ca 1 object con neu colorUseRef.current thi chi nhan value
      const newColor = randomColor(colorUseRef.current);
      setColor(newColor);
      //set mau cho mau hien tai sau khi co 1 mau moi
      colorUseRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  //cai nay la custom hooks nen se return lai du lieu chu khong phai json
  return color;
}

export default useMagicColor;
