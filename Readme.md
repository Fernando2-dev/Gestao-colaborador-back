#App 

Gympass styles app

##RF ( Requisitoss Funcionais )
- [] Deve ser possível se cadastrar 

 
 
##RN ( Regras de Negócio )
- [] O usuário não deve poder se cadastraar com um email duplicado;
- [] O usuário não pode fazer 2 check-in no mesmo dia;
- [] O usuário não pode fazer check-in se não estiver próximo (100) da academia;
- [] O Check-in só pode ser validado até 20 minutos após criada;
- [] O Check-in só pode ser validado por administrador;
- [] A academia só pode ser cadastrada por admnistrador;


##RNF ( Requisitos não Funconais )
- [] A senha do usuário precisa estar criptografado
- [] Os dados da aplicação precisam estar persistidos em um banco de dados PostgreSQL
- [] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [] O usuário deve ser indentificado por um jwt 