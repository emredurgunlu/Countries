import React from "react";
import { useSelector } from "react-redux";
// Bu dosya veriyi değiştirmiyor, sadece ekranda gösteriyor
const Footer = () => {
  const veri = useSelector((state) => state.counter.value);
  return <div>Benim Globalden gelen değerim:{veri}</div>;
};

export default Footer;
