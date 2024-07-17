# SCORMToolkit
SCORMToolkit é um framework desenvolvido para facilitar a integração e manipulação de conteúdos SCORM em sistemas de gestão de aprendizagem (LMS). 
Este projeto foi criado com o objetivo de simplificar a implementação de funcionalidades SCORM em aplicações front-end, oferecendo uma coleção de 
ferramentas e utilitários que permitem uma integração rápida e eficiente com qualquer LMS compatível com SCORM.  

## Funcionalidades
- **Inicialização SCORM**: Facilita o processo de inicialização da comunicação SCORM.
- **Manipulação de Dados SCORM**: Simplifica a obtenção e definição de dados SCORM.
- **Gerenciamento de Sessão**: Gerencia automaticamente o início e término de sessões SCORM.
- **Compatibilidade com SCORM 1.2 e 2004**: Suporta ambas as versões populares do padrão SCORM.

    
## Instalação
Para começar a usar o SCORMToolkit, basta clonar este repositório e instalar as dependências necessárias:

  
```
git clone https://github.com/seu-usuario/SCORMToolkit.git
cd SCORMToolkit
npm install

```

## Uso  
Aqui está um exemplo básico de como utilizar o SCORMToolkit em sua aplicação front-end:  
```bash
import { initializeScorm, getScormData, setScormData, finishScorm } from './scorm';

// Inicializa a comunicação SCORM
if (initializeScorm()) {
  // Obtém o status da lição
  const completionStatus = getScormData('cmi.core.lesson_status');
  console.log(`Completion Status: ${completionStatus}`);

  // Define o status da lição como completado
  setScormData('cmi.core.lesson_status', 'completed');
}

// Finaliza a comunicação SCORM ao sair
window.addEventListener('beforeunload', finishScorm);
```
## Estrutura do Projeto  
- **src/scorm.ts: Contém as funções principais para a comunicação SCORM.
- **src/index.tsx: Ponto de entrada da aplicação.
- **public/: Contém arquivos estáticos, incluindo o index.html e SCORM_API.js.

```bash
SCORMToolkit/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── SCORM_API.js
├── src/
│   ├── index.css
│   ├── index.tsx
│   ├── App.tsx
│   └── scorm.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```
## Contribuição  
Se você deseja contribuir para o desenvolvimento do SCORMToolkit, sinta-se à vontade para abrir um pull request ou relatar

### problemas no repositório. Agradecemos qualquer tipo de contribuição para melhorar este projeto!  

## Contato  
Para mais informações ou suporte, entre em contato com flavio.andrade91@outlook.com.br.  

Obrigado por utilizar o SCORMToolkit! Esperamos que ele facilite a integração e manipulação de conteúdos SCORM em seu LMS.


