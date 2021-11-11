// Void vs Never

// Void usado como retorno de uma função, quando a mesma não retorna nada.
function showFeedBack(message: string, type: string): void{
    console.log(type.toUpperCase() + ": " + message);
}

// Never serve para marcar uma função que ela nunca irá retornar nada.

function showError(message: string): never{
    throw new Error("Função marcada com never nunca retorna nada.");
}