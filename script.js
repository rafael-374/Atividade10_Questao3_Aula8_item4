function triangulo (l1, l2, l3)
{
    if((((l1+l2)>l3) && ((l1+l3)>l2) && ((l2+l3)>l1)) && (l1===l2 && l2===l3))
    {
        alert("É um triângulo. O triângulo é equilátero.")
    }
    else if((((l1+l2)>l3) && ((l1+l3)>l2) && ((l2+l3)>l1)) && ((l1===l2 && l2!=l3) || (l1===l3 && l3!=l2) || (l2===l3 && l3!=l1)))
    {
        alert("É um triângulo. O triângulo é isósceles.")
    }
    else if((((l1+l2)>l3) && ((l1+l3)>l2) && ((l2+l3)>l1)) && (l1!=l2 && l2!=l3))
    {
        alert("É um triângulo. O triângulo é escaleno.")
    }
    else
    {
        alert("Não é um triângulo.")
    }
}

let x = parseInt(prompt("Lado 1:"))
let y = parseInt(prompt("lado 2:"))
let z = parseInt(prompt("lado 3:"))

triangulo (x, y, z)