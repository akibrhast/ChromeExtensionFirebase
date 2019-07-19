// Try edit msg
var msg = '1/2 cup frozen strawberries 1/3 cup frozen raspberries 3 Tbsp. dark brown sugar 3 Tbsp. Chambord liqueur 1/2 tsp. freshly ground black pepper Pinch of kosher salt 6–8 small meringue cookies 3 large scoops vanilla ice cream (from 1 pint) Extra-virgin olive oil, flaky sea salt, and basil leaves (for serving)'
var msg = msg.split(" ")


var fruits = `Acai
Apples
Apricots
Avocado
Ackee
Bananas
Bilberries
Blueberries
Blackberries
Boysenberries
Bread fruit
Cantaloupes (cantalope)
Chocolate-Fruit
Cherimoya
Cherries
Cranberries
Cucumbers
Currants
Dates
Durian
Eggplant
Elderberries
Figs
Gooseberries
Grapes
Grapefruit
Guava
Honeydew melons
Horned melon (Kiwano)
Huckleberries
Ita Palm
Jujubes
Kiwis
Kumquat
Lemons
Limes
Lychees
Mangos
Mangosteen
Mulberries
Muskmelon
Nectarines
Ogden melons
Olives
Oranges
Papaya
Passion fruit
Peaches
Pears
Peppers
Persimmon
Pineapple
Plums
Pluot
Pomegranate
Prickly Pear
Quince
Rambuton
Raspberries
Rose Apple
Starfruit
Sapadilla
Strawberries
Tamarind
Tangelo
Tangerines
Tomatoes
Ugli fruit
Voavanga (Spanish Tamarind)
Watermelons
Xigua melon
Yellow watermelon
Zucchini`
fruits = fruits.split("\n")
var arr ={}
function myfunc(item,index){
  key=item
  //console.log(index +" : "+ item)
  //keyVal = item+":"+item;
  arr[item] = item;
  
}
fruits.forEach(myfunc);



function HashTable(obj)
{
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          
            this.items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        this.items = {}
        this.length = 0;
    }
}
var h = new HashTable(arr);
console.log(h.getItem('Strawberries'))
cleanMsg =[]
function sanitize(item,index){
  
  
}

msg.forEach(sanitize);