instruções de como executar a aplicação:

1 - Certifique-se de que o Node.js, Docker e o gerenciador de pacotes npm estejam instalados em seu computador.
2 - Clone o repositório da aplicação em seu computador e navegue até o diretório raiz do projeto.
3 - Instale as dependências do projeto executando o comando npm install no terminal.
4 - Crie um arquivo chamado .env na raiz do projeto e adicione a seguinte variável de ambiente:
      DATABASE_URL="postgresql://admin:admin@localhost:5433/projectManagementPlan"
      SECRET_KEY="<escolha o nome>"
5 - Execute o comando docker-compose up no terminal para construir as imagens e iniciar os containers.
6 - Execute o comando npx prisma migrate dev no terminal para criar as tabelas do banco de dados com base no schema definido.
7 - Com o Docker rodando nicie o servidor da aplicação executando o comando yarn start:dev no terminal. Isso iniciará o servidor em modo de desenvolvimento.
8 - Teste a aplicação acessando localhost:3000/api/docs#/ em seu navegador ou utilizando uma ferramenta de testes de API

como utilizar a API:

No profile tem 5 rotas: 

/project/create - onde cria um novo projeto;
/project - onde lista todos os projetos criados;
/project/find/{id} - onde lista um unico projeto;
/project/update - onde editar um projeto;
/project/delete/{id} - onde deleta um projeto, assim como todas as suas tarefas.

No task tem 6 rotas:

/task/create - onde cria uma nova tarefa a um projeto;
/task - onde lista todas as tarefas criadas;
/task/{projectId}/tasks - onde lista tarefas de um projeto
/task/find/{id} - onde lista uma unica tarefa;
/task/update - onde edita uma tarefa;
/task/delete/{id} - onde deleta uma tarefa.
