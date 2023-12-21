export class EmailSenhaAutenticacao extends Error{
    constructor(){
        super("Email ou senha incorretos")
    }
}