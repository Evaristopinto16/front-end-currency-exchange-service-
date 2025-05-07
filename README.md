 
## front-end-currency-exchange-service

Este projeto é a interface front-end para o serviço de câmbio informal `currency-exchange-service`. Ele permite que os utilizadores visualizem taxas de câmbio e, possivelmente, realizem operações de câmbio (dependendo da funcionalidade da API).

### Funcionalidades

* **Visualização de Taxas de Câmbio:** Exibe as taxas de câmbio atuais obtidas da API `currency-exchange-service`.
* **Interface Intuitiva:** Oferece uma interface de utilizador simples e fácil de usar para interagir com os dados de câmbio.
* **Design Responsivo:** Utiliza Bootstrap para garantir que a interface seja amigável em diferentes dispositivos.

### Tecnologias Utilizadas

* **HTML:** Estrutura básica das páginas web.
* **CSS:** Estilização e apresentação visual.
* **JavaScript:** Lógica de interação e consumo da API.
* **Bootstrap:** Framework CSS para um design responsivo e componentes pré-fabricados.

### Pré-requisitos

Para executar este projeto localmente, você precisará de um navegador web moderno. Certifique-se também de que o serviço `currency-exchange-service` está em execução e acessível.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/front-end-currency-exchange-service.git
   ```

2. Navegue para o diretório do projeto:
   ```bash
   cd front-end-currency-exchange-service
   ```

### Configuração

Este projeto em HTML, CSS e JavaScript puro geralmente não requer um processo de configuração complexo como em frameworks. No entanto, você pode precisar ajustar a URL da API que está a ser consumida no seu código JavaScript.

Procure pelo arquivo JavaScript principal (geralmente `src/script.js` ou similar) e localize a parte onde a chamada para a API é feita. A URL da API provavelmente estará definida lá.

Exemplo (pode variar dependendo do seu código):

```javascript
const apiUrl = 'http://localhost:8080/api/exchange'; // Substitua pela URL real da sua API

// ... código para fazer a requisição à API ...
```

### Execução

Para executar este projeto, basta abrir o arquivo `index.html` (ou o arquivo HTML principal do seu projeto) no seu navegador web.

### Desenvolvimento

* **Estrutura:** O projeto provavelmente segue uma estrutura básica com arquivos HTML, CSS e JavaScript separados.
* **Consumo da API:** O código JavaScript é responsável por fazer requisições HTTP para a API `currency-exchange-service` (usando `fetch` ou `XMLHttpRequest`) e atualizar a interface do utilizador com os dados recebidos.
* **Estilização:** O Bootstrap é utilizado para a estilização, juntamente com CSS customizado no arquivo `style.css`.

### Contribuição

Contribuições são bem-vindas! Se deseja contribuir para este projeto, por favor siga estes passos:

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b feature/sua-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.

 