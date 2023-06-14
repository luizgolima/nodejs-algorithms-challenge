# Teste - README.md

Este é o README.md para o teste que recebi como parte de um processo seletivo. O teste consiste em resolver uma série de
problemas em diferentes arquivos JavaScript. Neste documento, vou fornecer uma visão geral das alterações e melhorias
feitas em cada um dos arquivos, bem como explicar qualquer conceito ou técnica utilizada.

## Resolução - teste1.js

Neste arquivo, foram feitas as seguintes alterações:

1. Utilizei a função `Array.prototype.find()` em vez de um loop `for` para procurar o usuário pelo nome. Isso torna o
   código mais conciso e eficiente.
2. Adicionei uma verificação para garantir que um usuário seja encontrado antes de enviar a resposta. Caso nenhum
   usuário seja encontrado com o nome fornecido, uma resposta com status 404 é enviada.
3. Removi a declaração `var` para a variável `name` e utilizei `const` em vez disso, uma vez que seu valor não é
   reatribuído.
4. Ajustei a comparação `i.name == name` para `user.name === name`, onde `user` é o objeto do usuário atual no
   loop `find()`. Isso corrige um erro de referência e compara corretamente o nome do usuário.
5. Adicionei um comentário no código para explicar brevemente a função de cada rota.

## Resolução - teste2.js

Neste arquivo, a intenção é adicionar um novo usuário à lista de dados (`data`) e retornar o novo usuário adicionado
como resposta. Foram feitas as seguintes melhorias:

1. Renomeei a função para `createUser` para refletir melhor a ação sendo executada.
2. Utilizei a desestruturação de objetos para extrair `name` e `job` diretamente de `req.body`, tornando o código mais
   conciso.
3. Atualizei a atribuição do objeto `newUser` para utilizar os valores extraídos de `req.body` corretamente.
4. Adicionei `res.status(201)` para retornar um status de resposta 201 (Created) após a criação bem-sucedida do usuário.
5. Removi a atribuição da função anônima ao `module.exports` e, em vez disso, exportei diretamente a
   função `createUser`.

## Resolução - teste3.js

Neste arquivo, a intenção é excluir um usuário da base de dados (`data`) com base no nome fornecido e retornar uma
resposta de sucesso ao cliente. Foram feitas as seguintes melhorias:

1. Utilizei a função `Array.prototype.findIndex()` em vez de um loop `for` para procurar o usuário pelo nome. Isso
   melhora a eficiência, pois interrompe a busca assim que o usuário é encontrado.
2. Corrigi a comparação `i.name == name` para `user && user.name === name`, onde `user` é o objeto de usuário atual no
   loop `findIndex()`. Essa comparação verifica se o usuário existe (`user`) antes de comparar o nome, evitando erros de
   referência.
3. Utilizei `Array.prototype.splice()` para remover o usuário encontrado da matriz `data`. Isso atualiza a matriz
   original sem deixar valores nulos.
4. Adicionei uma verificação para garantir que um usuário seja encontrado antes de enviar a resposta. Se nenhum usuário
   for encontrado com o nome fornecido, uma resposta com status 404 é enviada.

## Resolução - teste4.js

Neste arquivo, a intenção é atualizar os dados de um usuário específico com base no ID fornecido. Foram feitas as
seguintes melhorias:

1. Adicionei a desestruturação de objetos para extrair `name` e `job` diretamente de `req.body`, tornando o código mais
   conciso.
2. Corrigi a expressão lambda dentro da função `find()`. Agora, a comparação é feita entre `d.id` (propriedade ID do
   usuário) e o `id` fornecido na consulta.
3. Adicionei uma verificação para garantir que um usuário seja encontrado antes de atualizar seus dados e enviar a
   resposta. Se nenhum usuário for encontrado com o ID fornecido, uma resposta com status 404 é enviada.

## Resolução - teste5.js

Neste arquivo, a intenção é retornar quantas vezes um determinado usuário foi lido no `teste1.js`. Para realizar essa
tarefa, foram feitas as seguintes alterações:

1. Utilizei o método `Array.prototype.reduce()` para iterar sobre os dados e contar as ocorrências do usuário com o nome
   fornecido. Cada vez que o nome do usuário coincide, o contador é incrementado em 1.
2. No final, é enviada uma resposta contendo o número de vezes que o usuário foi lido.

## Resolução - Teste 6

Neste teste, foi implementado um sistema de permissões para usuários. As alterações realizadas são as seguintes:

1. Foi adicionado um campo adicional chamado "permissions" ao objeto de usuário no banco de dados fake.
2. Foi criado um middleware de verificação de permissões.
3. O middleware de verificação de permissões é utilizado nos testes 3 (criar usuário) e 4 (excluir usuário) para
   verificar se o usuário tem as permissões adequadas antes de permitir que as ações sejam executadas.
4. Caso o usuário não tenha as permissões necessárias, é retornada uma resposta com status 403 (Forbidden).

