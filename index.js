function receivesAFunction(spy){
    spy()
}

function returnsANamedFunction(){
    function eat(){}
    return eat
}

function returnsAnAnonymousFunction(){
    return  function () {
      } 
}
