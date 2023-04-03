import React from "react";
import Card from "./Card";

export default function TypesPizza() {
  return (
    <div>
      <div class="container mt-5 mb-5">
        <div class="row">
          <h1 class="text-center mb-5">Pizza Types</h1>
          <div class="card-cont">

          <Card imgUrl="img/carou1.jpeg" name="Pepperoni pizza"/>
          <Card imgUrl="img/carou2.jpeg" name="Magherita Pizza"/>
          <Card imgUrl="img/carou3.webp"name="Meateater pizza"/>
          <Card imgUrl="img/carou1.jpeg"name="Bbq Lovers"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
