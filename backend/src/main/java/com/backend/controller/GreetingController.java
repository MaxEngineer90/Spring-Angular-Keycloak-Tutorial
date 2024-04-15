package com.backend.controller;


import com.backend.dto.GreetingDto;
import com.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "/api/v1/greetings", produces = MediaType.APPLICATION_JSON_VALUE)
public class GreetingController {

    @Autowired
    UserService userService;


    @GetMapping("/greet/user")
    @PreAuthorize("hasRole('eternal_user')")
    public ResponseEntity<GreetingDto> getGreetingUserMessage() {
        String message = String.format("Welcome %s you are in user role", userService.getUsername());
        return ResponseEntity.ok(new GreetingDto(message));
    }

    @GetMapping("/greet/admin")
    @PreAuthorize("hasRole('eternal_admin')")
    public ResponseEntity<GreetingDto> getGreetingAdminMessage() {
        String message = String.format("Welcome %s you are in admin role", userService.getUsername());
        return ResponseEntity.ok(new GreetingDto(message));
    }

    @PostMapping("/logout")
    @PreAuthorize("hasRole('eternal_admin') or hasRole('eternal_user')")
    public void logout() {
        SecurityContextHolder.clearContext();
    }
}
