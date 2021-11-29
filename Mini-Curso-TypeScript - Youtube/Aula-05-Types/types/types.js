// boolean (true / false)
var isOpen; // Padrão é undefined
isOpen = true; // Type boolean
// string ('foo'; "foo", `foo`)
var message; // Padrão é undefined
message = "Texto exemplo"; // Type string
// number (int, float, hex, binary)
var total; // Padrão é undefined
total = 20; // Type number
// array (type[])
var items; // Padrão é undefined
items = ["foo", "bar"];
console.log(typeof items);
var values; // Padrão é undefined
values = [1, 2, 3]; // Type object
// tuple
var title; // Padrão é undefined
title = [1, "foo", "bar"]; // Type object
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (Qualquer coisa) NÃO É LEGAL!
var coisa; // É igual a "let coisa;", ou seja, é a mesma coisa de não typar. Também o padrão é undefined.
coisa = [1]; // Type object
