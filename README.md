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

* [http](http)

## Angular

* [localhost:4200](http://localhost:4200/)
* register user by default is the role "eternal_user"
* communicates with Keycloak using the keycloak-js library.
* [keycloak.service.ts](frontend%2Fsrc%2Fservices%2Fkeycloak%2Fkeycloak.service.ts)

## HTTP Client

* The following directory structure should be set up for the IntelliJ HTTP client configuration:
  ```
  ├── http/
  │   ├── env/
  │   │   ├── http-client.private.env.json
  │   │   ├── http-client.env.json
  ```

---

### http-client.private.env.json

This file should contain sensitive information like user credentials. It is stored under http/env/ and can optionally
be placed in a secret directory.

**Do not commit this file!!**

#### Content of http-client.private.env.json:

```json
 {
  "dev": {
    "greet-user": "test@test.de",
    "greet-password": "123"
  }
}
```

---

### http-client.env.json

This file contains environment-specific settings for your API calls, including the Keycloak token retrieval
configuration.

#### Content of http-client.env.json:

```json
{
  "dev": {
    "serverUrl": "http://localhost:8080/api/v1/greetings/greet",
    "Security": {
      "Auth": {
        "keycloak": {
          "Type": "OAuth2",
          "Grant Type": "Password",
          "Client ID": "eternal_backend",
          "Token URL": "http://localhost/realms/eternal/protocol/openid-connect/token",
          "Username": "{{greet-user}}",
          "Password": "{{greet-password}}"
        }
      }
    }
  }
}
``` 