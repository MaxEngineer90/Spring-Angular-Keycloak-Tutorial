# Spring Angular Keycloak tutorial

## Keycloak

* run [docker-compose.yml](docker%2Fdocker-compose.yml)

````bash
    cd ${youe project dir}
    docker-compose up 
````

* update client secret
* add user
    * Username: John-List
    * Password: 123
* create roles in client eternal_backend and eternal frontend
    * eternal_user
    * eternal_admin

## Spring

### Security config

* is configured to work with Spring Boot OAuth2 Resource Server, integrating
* [security](backend%2Fsrc%2Fmain%2Fjava%2Fcom%2Fbackend%2Fsecurity)

### in this tutorial was use intellij http client to call backend

* [http](backend%2Fhttp)

## Angular

* communicates with Keycloak using the keycloak-js library.
* [keycloak.service.ts](frontend%2Fsrc%2Fservices%2Fkeycloak%2Fkeycloak.service.ts)

