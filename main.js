menu_list_array = ["Vegan Margherita",
    "Vegan Farmhouse",
    "Vegan Tofu Masala",
    "Vegan Magic",
    "Vegan Extravaganza",
    "Deluxe Vegan Pizza"
];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>";
    menu_list_array.sort();
    console.log(menu_list_array);
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'

    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
    console.log(htmldata);

    //Complete the code
}

function AddItem() {
    var htmld;
    htmld = "<section class='cards'>";
    menu_list_array.sort();
    console.log(menu_list_array);
    for (var i = 0; i < menu_list_array.length; i++) {
        htmld = htmld + '<div class="card">' + '<img src="pizzaImg.png">' + menu_list_array[i] + '</div>'
    }
    htmld = htmld + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmld;
    console.log(htmld)
    //Complete the code

}

function add_toppings() {
    //Complete the code
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    console.log(menu_list_array);
AddItem();
}



