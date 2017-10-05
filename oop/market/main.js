function Item(place, name, price, weight) {
	this.place =  place ;
	this.name = '"'+name+'"';
	this.price = price ;
	this.weight = weight ;
	this.AddToHTML();
}





Item.prototype.AddToHTML = function() {

	var myTable = document.getElementsByTagName('table');
	var tr = document.createElement("tr");

	var pl = document.createElement("td");
	var na = document.createElement("td");
	var pr = document.createElement("td");
	var we = document.createElement("td");
	var buyNow = document.createElement("td");

	var buyNowButton = document.createElement("button");
	buyNowButton.style.width="80px";


	var pltext = document.createTextNode( this.place);
	var natext = document.createTextNode( this.name);
	var prtext = document.createTextNode( this.price);
	var wetext = document.createTextNode( this.weight);
	var valueOfBuyNow = document.createTextNode(  "  \u0020 \u0020Купити  \u0020\u0020\u0020\u0020\u0020");
	
	buyNowButton.appendChild(valueOfBuyNow);
	
	pl.appendChild(pltext);
	na.appendChild(natext);
	pr.appendChild(prtext);
	we.appendChild(wetext);
	buyNow.appendChild(buyNowButton);

	tr.appendChild(pl);
	tr.appendChild(na);
	tr.appendChild(pr);
	tr.appendChild(we);
	tr.appendChild(buyNow);

 document.getElementById("List").appendChild(tr);


}



var cellphone1 = new Item(1 , "Samsung Galaxy J7 J700H/DS Gold + захисне скло + чохол!", 4999, 171);
var cellphone2 = new Item(2 , "Astro A170 Black/Red ", 299, 230);
var cellphone3 = new Item(3 , "Nokia 5 Dual Sim Tempered Blue + захисне скло у подарунок!", 5999, 150);
var cellphone4 = new Item(4 , "Samsung Galaxy J5 J500H/DS Black + чохол + захисне скло!", 3999, 200);
var cellphone5 = new Item(5 , "Xiaomi Redmi Note 4X 3/32GB Grey", 4499, 180);
var cellphone6 = new Item(6 , "Lenovo Vibe P1 Pro Silver", 4795, 190);
var cellphone7 = new Item(7 , "Apple iPhone 6 32GB Space Gray", 11499, 129);
var cellphone8 = new Item(8 , " Huawei P8 Lite 2017 (PRA-LA1) White + захисне скло + чохол!", 6499, 150);
var cellphone9 = new Item(9 , "Samsung Galaxy J7 (2017) J730 Black", 8999, 148);
var cellphone10 = new Item(10 , "Lenovo K5 Plus (A6020a46) Grеy", 3333, 180);
var cellphone11= new Item(11, "Samsung Galaxy J3 2016 SM-J320H Gold + захисне скло + чохол!", 2999, 210);
var cellphone12= new Item(12, "Sony Xperia X Dual Black", 6999, 195);
var cellphone13= new Item(13, "Meizu M5C 2/16GB Black (Міжнародна версія)", 2688, 159);
var cellphone14= new Item(14 ,"Apple iPhone 7 32GB Black", 17999, 125);
var cellphone15= new Item(15, "Motorola MOTO G5 (XT1676) Grey", 4995, 157);



var a = document.getElementsByTagName("button");
var redCircl = document.getElementById("icon");
var count = 0;
var box = document.getElementById("box");
var emptyBox = document.getElementById("trash");



function w() {
 
    for (var i = 0; i < a.length; i++)(function(i) {

        var onebutton = a[i];

        onebutton.onclick = function() {

            var innerBotton = onebutton.innerHTML = "У кошику";
            var nonebox = redCircl.style.display = "inline";

            if (innerBotton) {

                ++count;
                redCircl.innerHTML = count;
            }
        }
    })(i);
}

function hower(){

	var nonebox = redCircl.style.display = "none";

	if(nonebox){

		
			box.onmouseover = function(){

					emptyBox.style.display = "block";

			};

			box.onmouseout = function(){

					emptyBox.style.display = "none";

			};




		};

	}


w();
hower();
