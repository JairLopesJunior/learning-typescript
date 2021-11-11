// Any vs Unknown
// Por padrão o metodo add(x, y) possui os tipos any, que devem ser evitados por que podem ser qualquer tipo.
// O tipo Unknown é um pouco mais seguro que o any por que é obrigado a fazer uma condicional para o codigo funcionar e também o mesmo nos informa qual os possiveis tipos irá retornar.

function add(x: unknown, y: unknown){
    if(typeof x === "number" && typeof y === "number") return x + y;
    return null;
}

const teste = add(3, 5);

console.log(teste);