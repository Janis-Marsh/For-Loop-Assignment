// Create a for loop that prints the multiplication table of 12 from 12 × 1 to 12 × 15.
let num = 12
let table = ""
for (let i=1; i<=15; i++)
{
    table = num * i
    console.log(num + " x " + i + " = " + table);
}
