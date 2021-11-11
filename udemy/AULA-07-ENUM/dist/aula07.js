"use strict";
// ENUM - Existe somente no TypeScript
//enum Sizes {
//    SMALL, NORMAL, LARGE
//}
//console.log(Sizes.LARGE); 
// Retorno Sizes.SMALL = 0
// Retorno Sizes.NORMAL = 1
// Retorno Sizes.LARGE = 2
// Outra forma de fazer
var Sizes;
(function (Sizes) {
    Sizes["SMALL"] = "12px";
    Sizes["NORMAL"] = "16px";
    Sizes["LARGE"] = "24px";
})(Sizes || (Sizes = {}));
console.log(Sizes.SMALL); // Saída: 12px
