#App 

Gympass styles app

##RF ( Requisitoss Funcionais )
- [] Deve ser possível se cadastrar 
- [] Deve ser possível se autenticar
- [] Deve ser possível obter o perfil do usuário logado
- [] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [] Deve ser possível o usuário obter seu histórico de check-ins
- [] Deve ser possível o usuário buscar academia próxima
- [] Deve ser possível o usuário buscar academia pelo nome
- [] Deve ser possível o usuário realizar check-in em uma academia 
- [] Deve ser possível o usuário validar o check-in de um usuário
- [] Deve ser possível cadastrar uma academia;
 
 
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