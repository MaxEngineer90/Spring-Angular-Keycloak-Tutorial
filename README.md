# Spring Angular Keycloak tutorial

## Keycloak

* run [docker-compose.yml](docker%2Fdocker-compose.yml)

````bash
    cd ${youe project dir}
    docker-compose up 
````

* update client secret

## Spring

### Security config

* is configured to work with Spring Boot OAuth2 Resource Server, integrating
* [security](backend%2Fsrc%2Fmain%2Fjava%2Fcom%2Fbackend%2Fsecurity)

### in this tutorial was use intellij http client to call backend

* [http](backend%2Fhttp)

## Angular

* [localhost:4200](http://localhost:4200/)
* register user by default is the role "eternal_user"
* communicates with Keycloak using the keycloak-js library.
* [keycloak.service.ts](frontend%2Fsrc%2Fservices%2Fkeycloak%2Fkeycloak.service.ts)

