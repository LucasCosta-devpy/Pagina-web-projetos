# Galeria de Projetos

Este projeto é uma galeria web que exibe projetos em formato de cards dinâmicos, usando HTML, CSS, JavaScript, e JSON. Ao clicar em um card, os usuários são levados a uma página com mais detalhes sobre o projeto.

## Funcionalidades

- Exibição de projetos em formato de cards.
- Detalhamento de cada projeto em uma página separada.
- Fácil adição de novos projetos através de arquivos JSON.

## Tecnologias Utilizadas

- **HTML** para a estrutura da página.
- **CSS** para estilização.
- **JavaScript** para manipulação de dados e criação de conteúdo dinâmico.
- **Canvas** para possíveis melhorias visuais.
- **JSON** como fonte de dados dos projetos.

## Estrutura do Projeto


## Instalação e Uso

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/projeto-cards.git

Mude para a branch feature:
    git checkout feature
Abra index.html em um navegador para ver a galeria em ação.

Como Adicionar Projetos
    Adicione um novo objeto ao arquivo data/projects.json com o seguinte formato:

    {
    "title": "Novo Projeto",
    "author": "Seu Nome",
    "thumbnail": "assets/images/novo_projeto.jpg",
    "description": "Descrição do novo projeto.",
    "videoLink": "https://www.youtube.com/embed/seu-video",
    "projectLink": "detalhes.html?id=novo_projeto"
    }

Salve o arquivo e recarregue a página para ver o novo projeto na galeria.

Contribuições
Contribuições são bem-vindas! Se você deseja colaborar:

Faça um fork do repositório.
Crie uma branch com sua feature:
    git checkout -b feature/nova-feature

Commit suas mudanças:
    git commit -m "Adiciona nova feature"

Envie para a branch feature:
    git push origin feature/nova-feature
Abra um pull request.

Licença
Este projeto está sob a licença MIT.

### Explicação:
- O `README.md` orienta os colaboradores a usarem a branch `feature` para fazer suas contribuições.
- Inclui instruções detalhadas de clonagem, uso e adição de novos projetos ao arquivo JSON.
- Mostra a estrutura do projeto e como iniciar o desenvolvimento localmente.
