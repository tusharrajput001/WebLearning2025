// ------------ let const var --------------------
// LET have Block Scope
// LET must be declared before use
// LET cannot be redeclared in the same scope

//we cannot acces let out of block
{
  let a = 20;
}
console.log(a);


// block scoped we can declare it multiple time in diffrent scopes it works
{
  let a = 20;
  console.log(a);
}
{
  let a = 2;
  console.log(a);
}


// const 

// cannot change its constant
//error
const name = "Tushar";
name = "Tusharrajput";

// var

// var is function scoped



