# jobsnet
Projeto final proposto no bootcamp Start Tech, da Gama Academy em parceria com a Ambev Tech.

### **Frontend**

### **Fase 1 - Criação da Página**

- [x]  Apresentar a estrutura do projeto no github;
- [x]  Landing page com formulário para preenchimento de candidatura. (Referencia formulário - [link](https://drive.google.com/file/d/1S3Y6otnW2tQLsX1aSgXL5bZuzPbt4rWS/view?usp=sharing)). Não existe uma regra para o layout da página, use a imaginação com todos os conhecimentos adquiridos no front-end
- [x]  Indicamos o Netlify para hospedar sua pagina gratuitamente.

### **Backend**

### **Domínio - Modelagem de Dados**

- [x]  Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
- [x]  Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) **NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: [https://viacep.com.br/ws/{SEU_CEP}/json/](https://viacep.com.br/ws/%7BSEU_CEP%7D/json/)**

### **Regra de Negócio**

- [x]  Não pode haver 2 cadastros de candidatos com o mesmo cpf
- [x]  Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular

### **Integração entre a Página de Formulário e o Back-end**

- [x]  Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
- [x]  Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.
