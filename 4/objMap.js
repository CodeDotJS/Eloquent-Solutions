var map = {};

function storePhi ( event , phi ) {
  map [ event ] = phi ;
}

storePhi (" pizza " , 0.069) ;
storePhi (" touched tree " , -0.081) ;

console . log (" pizza " in map ) ;
// → true
console . log ( map [" touched tree "]) ;
// → -0.081
