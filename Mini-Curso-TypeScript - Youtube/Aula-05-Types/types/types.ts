// boolean (true / false)
let isOpen: boolean; // Padrão é undefined
isOpen = true; // Type boolean

// string ('foo'; "foo", `foo`)
let message: string; // Padrão é undefined
message = "Texto exemplo"; // Type string

// number (int, float, hex, binary)
let total: number; // Padrão é undefined
total = 20; // Type number

// array (type[])
let items: string[]; // Padrão é undefined
items = ["foo", "bar"]; // Type object

let values: Array<number>; // Padrão é undefined
values = [1, 2, 3]; // Type object

// tuple
let title: [number, string, string]; // Padrão é undefined
title = [1, "foo", "bar"]; // Type object

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (Qualquer coisa) NÃO É LEGAL!
let coisa: any; // É igual a "let coisa;", ou seja, é a mesma coisa de não typar. Também o padrão é undefined.
coisa = [1]; // Type object

// void (vazio)
function logger(): void {
  console.log("foo");
}

// null | undefined - Não é aconselhavel definir variaveis como null

// never (é o tipo que a gente fala que nunca vai retornar)
function error(): never {
  throw new Error("Error");
}

// object (É o todos os tipos que não são nem string, nem array, nem boolean e nem number)
let cart: object;
cart = {
  key: "fi",
};
