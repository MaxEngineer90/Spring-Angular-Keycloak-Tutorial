package com.backend.controller;


import com.backend.dto.GreetingDto;
import com.backend.dto.UserDto;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "/api/v1/greetings", produces = MediaType.APPLICATION_JSON_VALUE)
public class GreetingController {

    @GetMapping("/greet/user")
    @PreAuthorize("hasRole('ETERNAL_USER')")
    public ResponseEntity<GreetingDto> getGreetingUserMessage(@AuthenticationPrincipal UserDto user) {
        String message = String.format("Welcome %s %s you are in user role", user.getFirstName(), user.getLastName());
        return ResponseEntity.ok(new GreetingDto(message));
    }

    @GetMapping("/greet/admin")
    @PreAuthorize("hasRole('ETERNAL_ADMIN')")
    public ResponseEntity<GreetingDto> getGreetingAdminMessage(@AuthenticationPrincipal UserDto user) {
        String message = String.format("Welcome %s %s you are in admin role", user.getFirstName(), user.getLastName());
        return ResponseEntity.ok(new GreetingDto(message));
    }
}
