# Monitorizare Vot - Web platform for the general public

[![GitHub contributors](https://img.shields.io/github/contributors/code4romania/monitorizare-vot-votanti-client.svg?style=for-the-badge)](https://github.com/code4romania/monitorizare-vot-votanti-client/graphs/contributors) [![GitHub last commit](https://img.shields.io/github/last-commit/code4romania/monitorizare-vot-votanti-client.svg?style=for-the-badge)](https://github.com/code4romania/monitorizare-vot-votanti-client/commits/master) [![License: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)

[See the project live](http://monitorizarevot.ro/)

Monitorizare Vot is a mobile app for monitoring elections by authorized observers. They can use the app in order to offer a real-time snapshot on what is going on at polling stations and they can report on any noticeable irregularities. 

The NGO-s with authorized observers for monitoring elections have real time access to the data the observers are transmitting therefore they can report on how voting is evolving and they can quickly signal to the authorities where issues need to be solved. 

Moreover, where it is allowed, observers can also photograph and film specific situations and send the images to the NGO they belong to. 

The app also has a web version, available for every citizen who wants to report on election irregularities. Monitorizare Vot was launched in 2016 and it has been used for the Romanian parliamentary elections so far, but it is available for further use, regardless of the type of elections or voting process. 

[Contributing](#contributing) | [Built with](#built-with) | [Repos and projects](#repos-and-projects) | [Deployment](#deployment) | [Feedback](#feedback) | [License](#license) | [About Code4Ro](#about-code4ro)

## Contributing

This project is built by amazing volunteers and you can be one of them! Here's a list of ways in [which you can contribute to this project](.github/CONTRIBUTING.MD).

## Built With

The app is based on [React Boilerplate](https://github.com/mxstbr/react-boilerplate/), uses [Styled components](https://github.com/styled-components/styled-components) and [Material-UI](https://github.com/callemall/material-ui) for the UI elements.

## Repos and projects

Related projects:

- repo for the API - https://github.com/code4romania/monitorizare-vot-votanti-api/
- repo for admin app - https://github.com/code4romania/monitorizare-vot-votanti-admin

Other MV related repos:

- https://github.com/code4romania/monitorizare-vot
- https://github.com/code4romania/monitorizare-vot-android
- https://github.com/code4romania/monitorizare-vot-ios
- https://github.com/code4romania/monitorizare-vot-admin
- https://github.com/code4romania/monitorizare-vot-ong
- https://github.com/code4romania/monitorizare-vot-docs

## Deployment

First, you need a recent version on Node.js. We used `node 7.0.0` for development and we recommend [nvm](https://github.com/creationix/nvm).

```
$ npm install
$ npm run start
$ npm run build && cd build && http-server
```

*If you have [Yarn](https://yarnpkg.com/), you it to install the dependencies, it's much faster.*
*http-server is not part of the projects dependencies*

## Feedback

* Request a new feature on GitHub.
* Vote for popular feature requests.
* File a bug in GitHub Issues.
* Email us with other feedback contact@code4.ro

## License

This project is licensed under the MPL 2.0 License - see the [LICENSE](LICENSE) file for details

## About Code4Ro

Started in 2016, Code for Romania is a civic tech NGO, official member of the Code for All network. We have a community of over 500 volunteers (developers, ux/ui, communications, data scientists, graphic designers, devops, it security and more) who work pro-bono for developing digital solutions to solve social problems. #techforsocialgood. If you want to learn more details about our projects [visit our site](https://www.code4.ro/en/) or if you want to talk to one of our staff members, please e-mail us at contact@code4.ro.

Last, but not least, we rely on donations to ensure the infrastructure, logistics and management of our community that is widely spread across 11 timezones, coding for social change to make Romania and the world a better place. If you want to support us, [you can do it here](https://code4.ro/en/donate/).
