
higlightedIngredient = window.getSelection().toString();
ingred = [1,2,3,4,5,5]




chrome.storage.sync.get(['Myingredients'], function(result){
    
    result.Myingredients[higlightedIngredient] = higlightedIngredient
    //ingred.push(result.Myingredients);
    //ingred.push(higlightedIngredient)

    
    ingredients = {Myingredients:ingred}
    console.log(result)
    chrome.storage.sync.set(ingredients,function(){
        console.log(" ")
    })
        
})


