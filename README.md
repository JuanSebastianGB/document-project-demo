# document-project-demo

# General information
This project is a skeleton with basics to handle project's **documentation**

## Main Technology used
Nodejs
### Dependencies
- JSDOC
```
npm i jsdoc
```
or
```
npm i  --save-dev jsdoc
```
### Basic configuration
- [Confiuration setup](https://jsdoc.app/about-configuring-jsdoc.html)

### using jsdoc if was installed globaly
```
jsdoc -c jsdoc.json
```
### using jsdoc if was installed localy
```
npx jsdoc -c jsdoc.json
```
### Searching for one template

- [Source templates](https://cancerberosgx.github.io/jsdoc-templates-demo/demo/)

### Selected template
```
npm i clean-jsdoc-theme
```

```json
{
        "opts": {
        "encoding": "utf8",
        "readme": "./README.md",
        "destination": "docs/",
        "recurse": true,
        "verbose": true,
        "template": "./node_modules/clean-jsdoc-theme",
        "theme_opts": {
            "theme": "dark"
        }
    }
}
```

## Deploy
This example like static website is deployed in github web pages
- To make the deployment of this repository is uploaded the docs file. "It is mandatory this name"

### URL demo
- [DEMO](https://juansebastiangb.github.io/document-project-demo/)
