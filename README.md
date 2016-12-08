# Monitorizare Vot - Platforma pentru votanti

Monitorizare Vot este un proiect Code for Romania, realizat în parteneriat cu EFOR, Geeks for Democracy, Funky Citizens, Observatorul Electoral, Centrul pentru Resurse Civice și Centrul pentru Studiul Democratiei. Scopul nostru este dezvoltarea unui instrument IT prin care observatorii electorali să poată transmite simplu și rapid sesizările lor către ONG-ul care i-a acreditat.

Platforma de fata ofera cetățenilor o interfata foarte ușor de folosit unde se pot face auziți atunci când au de semnalat o neregulă în desfășurarea alegerilor. Ne dorim astfel să-i încurajăm pe oameni să se implice în procesul electoral, pentru alegeri corecte în toată țara.

## Tehnologie

Aplicatia are la baza [React Boilerplate](https://github.com/mxstbr/react-boilerplate/), foloseste [Styled components](https://github.com/styled-components/styled-components) si [Material-UI](https://github.com/callemall/material-ui) pentru elementele de interfata.

## Instalare
In primul rand ai nevoie de o versiune recenta de Node.js. Am dezvoltat pe `node 7.0.0`, va recomandam [nvm](https://github.com/creationix/nvm) pentru o viata mai usoara si sanatoasa.

```
$ npm install
$ npm run start
$ npm run build && cd biuld && http-server
```

*Daca ai [Yarn](https://yarnpkg.com/), instaleaza-l si foloseste-l pentru instalarea dependintelor, este mult mai rapid.*
*http-server nu face parte din dependintele proiectului*