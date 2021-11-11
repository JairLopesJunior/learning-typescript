// ENUM - Existe somente no TypeScript

//enum Sizes {
//    SMALL, NORMAL, LARGE
//}

//console.log(Sizes.LARGE); 
// Retorno Sizes.SMALL = 0
// Retorno Sizes.NORMAL = 1
// Retorno Sizes.LARGE = 2

// Outra forma de fazer

enum Sizes {
    SMALL = "12px",
    NORMAL = "16px",
    LARGE = "24px"
}

console.log(Sizes.SMALL) // Saída: 12px