# JS Class #3

In this class, we have learn about

- *Ambiguity in Javascript:* Operator precedence and how to change operators precendence with the help of baces/parenthesis() in js.
- *Arithmetic Assinment Operators:* We are learning about how assinment operators work, types of assignment operators.
- *Increament Decreament Operators:* we have deeply learn how increament decreament operators work, post increament `num++`,pre-increament `++num`, post decreament `num--`,pre-decreament `--num`. 


### Assignment Question

- Q1: difference between `null`, `undefine`, `not define`

<!-- Increament Decreament Operators -->


#### Example 1
```Javascript

   var a=1;
   a = a++ + ++a * --a - a--;
   console.log(a);

```

#### Example 2
```Javascript
 
 var x = 1, y=10, z=100;     
 var i = --x + y++ - z-- - --z + ++y - --x + y-- - --x;
         
console.log(i); 

// also what is the value of x, y and z
console.log(x);
console.log(y);
console.log(z);

```

#### Example 3
```Javascript
 
 var i = 2;  
 i = i++ + ++i;       
 console.log(i);

```

#### Example 4
```Javascript
 
  var i=0;
  i = i++ - --i + ++i - i--;       
  console.log(i);

```

#### Example 5
```Javascript
 
var a=1, b=2;
console.log(--b - ++a + ++b - --a);

```

#### Example 6
```Javascript
 
 var i=1, j=2, k=3;
 var m = i-- - j-- - k--;   
 
 console.log("m = "+m);
 
 console.log("i = "+i);
 console.log("j = "+j);
 console.log("k = "+k);

```

