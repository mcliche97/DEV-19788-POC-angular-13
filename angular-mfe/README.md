# AngularMfe
### Description du projet
Le projet a été créé à la version 12 de Angular et a ensuite été mis à jour à la version 14 (angular 12 -> angular 13 -> angular 14).
Il a été créé dans le but d'être un microfrontend angular 14 utilisé dans un shell à la version 12 de angular.

Le projet roule sur le port 3003.

### Références
La source suivante a été utilisée pour créer un projet qui sera compatible avec le shell (Angular 12). Il a fallu ajuster
le package.json automatiquement généré par les commandes pour que toutes les librairies soient compatibles avec angular 14.
* Article: https://www.angulararchitects.io/blog/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/
* Git: https://github.com/manfredsteyer/multi-framework-version/

Ce n'est pas mentionné dans l'article, mais pour que le projet puisse être roulé en local, il faut modifier le fichier index.html pour render la composante angular-1 créée dans le app.module.

--- 
## ReadMe autogénéré

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.17.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
