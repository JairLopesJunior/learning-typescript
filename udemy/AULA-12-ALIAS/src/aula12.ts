// Ex 1:
type testeAlias = number | string | boolean;

let teste: testeAlias;
teste = 10;



// Ex 2:
type User = {
  nome: string,
  idade?: number
}

const jair: User = {
  nome: "Jair"
}

const maria: User = {
  nome: "Maria",
  idade: 30
}



// Ex 3:
type Sizes = "12px" | "18px" | "24px";

const small: Sizes = "12px";
const normal: Sizes = "18px";
