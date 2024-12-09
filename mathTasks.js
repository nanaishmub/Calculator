// JavaScript Task List for Mathematical Calculations

//Area of a circle
function CalculateArea(){
    const pi = 3.142;
    var radius = prompt("Enter radius");
    if (radius > 0){
        Area = pi*radius**2;
        a = Area.toFixed(2);
        console.log(a);
    } else{
        console.log("invalid input");
    }}

 CalculateArea();

//Perimater of a Circle
function CalculatePerimeter(){
    const pi = 3.142;
    var radius = prompt("Enter radius");
    if (radius > 0){
        P = pi*2*radius;
        a = P.toFixed(2);
        console.log(a);
    } else{
        console.log("invalid input");
    }}

 CalculatePerimeter();

//Area of a Triangle
function TriangleArea(){
    var bb = prompt("Enter base")
    var hh = prompt("Enter height")

    Area = 1/2 * bb * hh;

    console.log(Area)
}

TriangleArea();

//Area of Rectangle
function RectArea(){
    var ww = prompt("Enter width")
    var hh = prompt("Enter height")

    Area = hh * ww;
    console.log(Area)
}

RectArea();

//Area of Square
function SqrArea(){
    var l = prompt("Enter lenght")

    Area = l**2;
    console.log(Area)
}

SqrArea();

//Area of Trapezium
function Trapex(){
    var a = prompt("Enter first base length")
    var b = prompt("Enter second base length")
    var h = prompt("Enter height")

    Area = 1/2 * a + b *h;
    console.log(Area)
}

Trapex();

//Square root
function Sqrt(){
    var n = prompt("Enter number")
    if(n > 0){
        sqrot = Math.sqrt(n)
        sqr = sqrot.toFixed(2)
        console.log(sqr)
    } else {
        console.log("Square cannot be found")
    }
}

Sqrt();

//Power of a number*********
function Power(){
    var n = prompt("Enter number")
    var b = prompt("Enter number")

    power = b**n;
    console.log(b ," ^ " ,n)
}

Power();

//Simple Interest
function SmplInterest(){
    var p = prompt("Enter principal")
    var r = prompt("Enter rate")
    var t = prompt("Enter time")

    SI = p*r*t/100
    console.log(SI)
}

SmplInterest();

//BMI
function BodyMassIndex(){
    var w = prompt("Eneter weight")
    var h = prompt("Enter height")

    if(h == 0 || w == 0){
        console.log("Invalid input")
    }else{
        BMI = (w/h)**2;
    }

    massIndex = BMI.toFixed(2)

    switch(massIndex){
        case massIndex <= 100 && massIndex >= 75:
            console.log(massIndex," obese");
            break;
        
        case massIndex < 75 && massIndex > 50:
            console.log(massIndex," overweight");
            break;

        case massIndex < 50 && massIndex > 25:
            console.log(massIndex," normal");
            break;
        default:
            console.log(massIndex, " underweight");
            break;
    } 
    
}

BodyMassIndex();
