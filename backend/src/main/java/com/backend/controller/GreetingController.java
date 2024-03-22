package com.backend.controller;


import com.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "/api/v1/greetings", produces = MediaType.APPLICATION_JSON_VALUE)
public class GreetingController {

    @Autowired
    UserService userService;


    @GetMapping("/greet")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<String> getShoppingCartByUser() {
        String message = String.format("Welcome %s", userService.getUsername());
        return ResponseEntity.ok(message);
    }
}
