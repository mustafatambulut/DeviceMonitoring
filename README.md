# DeviceMonitoring
for EATON

### Here is the live demo <a href="https://devicemonitoring.netlify.app" style="font-size: 40px">CLICK TO SEE </a>

### Login Information;
* Username: Admin
* Password: admin


## Technologies used in the project;

* [Angular Latest Version (Angular 12)](#requirements)
* [Angular Material](#quick-start)
* [Typescript](#documentation)
* [Bootstrap: { UI library used for responsive design }](#maintaining-dashboard-and-pattern-library)
* [Chart.js: { UI library used to display data on Dashboard page }](#atomic-design)
* [Prefier: { Prettier is an opinionated code formatter. It is a great way to keep code formatted consistently for you and your team. }](#license)
* [Husky: { Husky describes itself as “Git hooks made easy”. It provides pre-commit and pre-push hooks. Pre-push/Pre-commit hooks are nothing but commands which you would want to run every time you push/commit something. }](#license)
* [Prefier: { Toastr //To display Warning and Error messages }](#license)


## Requirements:

* [Node](https://nodejs.org/en/)
* [Angular CLI](https://angular.io/)


## Quick Start

* Install dependencies 

```bash
npm install
```

* Start server

```bash
ng serve
```

## Documentation

The front end workflow for the device monitor is comprised of three pages.

1. [Landing Page](https://devicemonitoring.netlify.app/)
1. Login Page
1. Dashboard Page


Device data is shown on the landing page. You must be logged in to view device data details. (Added the Guard feature for this)

### Technical Info
* The project consists of the @core and pages folder.
* Data is provided by reading dummy data from the X File. (Data Folder)
* @Core folder includes dummy data, components and service
* In Pages folder, there are pages (landing, login, dashboard) that make up the interface.
by putting the interceptor layer together, we could manage errors and logs.


## License

MIT Licensed. See [LICENSE](LICENSE)
