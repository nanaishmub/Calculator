// JavaScript Task List for Mathematical Calculations

//Area of a circle
function CalculateArea(radius) {
  const pi = 3.142;
  // var radius = prompt("Enter radius");
  if (radius > 0) {
    Area = pi * radius ** 2;
    a = Area.toFixed(2);
    console.log(`Area of a circle is ${a}`);
  } else {
    console.log("invalid input");
  }
}

CalculateArea(80);

//Perimater of a Circle
function CalculatePerimeter(radius) {
  const pi = 3.142;
  //var radius = prompt("Enter radius");
  if (radius > 0) {
    P = pi * 2 * radius;
    a = P.toFixed(2);
    console.log(`Perimater of a Circle = ${a}`);
  } else {
    console.log("invalid input");
  }
}

CalculatePerimeter(90);

//Area of a Triangle
function TriangleArea(bb, hh) {
  // var bb = prompt("Enter base");
  // var hh = prompt("Enter height");

  Area = (1 / 2) * bb * hh;

  console.log(`Area of a Triangle = ${Area}`);
}

TriangleArea(9, 10);

//Area of Rectangle
function RectArea(ww, hh) {
  // var ww = prompt("Enter width");
  // var hh = prompt("Enter height");

  Area = hh * ww;
  console.log(`Area of a Rectangle = ${Area}`);
}

RectArea(8, 10);

//Area of Square
function SqrArea(l) {
  // var l = prompt("Enter lenght");

  Area = l ** 2;
  console.log(`Area of a Square = ${Area}`);
}

SqrArea(10);

//Area of Trapezium
function Trapex(a, b, h) {
  // var a = prompt("Enter first base length");
  // var b = prompt("Enter second base length");
  // var h = prompt("Enter height");

  Area = (1 / 2) * a + b * h;
  console.log(`Area of a Trapezium = ${Area}`);
}

Trapex(9, 10, 6);

//Square root
function Sqrt(n) {
  // var n = prompt("Enter number");
  if (n > 0) {
    sqrot = Math.sqrt(n);
    sqr = sqrot.toFixed(2);
    console.log(`Square root = ${sqr}`);
  } else {
    console.log("Square cannot be found");
  }
}

Sqrt(49);

//Power of a number*********
function Power(n, b) {
  // var n = prompt("Enter number");
  // var b = prompt("Enter number");

  power = b ** n;
  console.log(`Power of a number********* = ${(b, " ^ ", n)}`);
}

Power(8, 9);

//Simple Interest
function SmplInterest(p, r, t) {
  // var p = prompt("Enter principal");
  // var r = prompt("Enter rate");
  // var t = prompt("Enter time");

  SI = (p * r * t) / 100;
  console.log(SI);
  console.log(`Simple Interest = ${SI}`);
}

SmplInterest(1000, 1.7, 8);

//BMI
function BodyMassIndex(w, h) {
  // var w = prompt("Eneter weight");
  // var h = prompt("Enter height");

  if (h == 0 || w == 0) {
    console.log("Invalid input");
  } else {
    BMI = (w / h) ** 2;
  }

  massIndex = BMI.toFixed(2);

  switch (massIndex) {
    case massIndex <= 100 && massIndex >= 75:
      console.log(massIndex, " obese");
      break;

    case massIndex < 75 && massIndex > 50:
      console.log(massIndex, " overweight");
      break;

    case massIndex < 50 && massIndex > 25:
      console.log(massIndex, " normal");
      break;
    default:
      console.log(massIndex, " underweight");
      break;
  }
}

BodyMassIndex(8, 7);
