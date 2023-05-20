# BlogDio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Mapeando o caminho
# design(inpiração) --> https://dribbble.com/shots/19341288-Marketing-Agency-Dashboard-Design

4 páginas 
    1. Design
    2. Books
    3. Products
    Cada página irá ter sua própria estrutura HTML e CSS, é nessa estrutura que será 'injetado' os componentes


Componentes
    1. pages-menu 
    2. header
    3. card-content
        1. small
        2. medium
        3. large
        O tamanho do card será passado pelo componente pai.

TO-DO:
    Deixar o conteúdo das cards dinâmicos(recebendo as propriedades através de inputs)
    Mudança de pagina Design(home), Books e Products
    Filtrar os cards, através do input 