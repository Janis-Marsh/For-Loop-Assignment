// Write a for loop that converts temperatures from 0°C to 50°C (increment by 5) to Fahrenheit. Formula: F = (C × 9/5) + 32

let result = ""
for (let c=0; c<=50; c += 5)
{
    result =  (c * 9/5) + 32;
    console.log(c + " celsius = " + result + " fahrenheit");
}
