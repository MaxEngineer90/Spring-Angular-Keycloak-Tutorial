package com.backend.controller;


import com.backend.dto.UserDTO;
import com.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/greetings", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {
    
    private final UserService userService;

    @GetMapping("/greet/user")
    @PreAuthorize("hasRole('ETERNAL_USER')")
    public ResponseEntity<UserDTO> getGreetingUserMessage(@AuthenticationPrincipal UserDTO user) {
        return ResponseEntity.ok(userService.getUserWithAddress(user));
    }

    @GetMapping("/greet/admin")
    @PreAuthorize("hasRole('ETERNAL_ADMIN')")
    public ResponseEntity<UserDTO> getGreetingAdminMessage(@AuthenticationPrincipal UserDTO user) {
        return ResponseEntity.ok(userService.getUserWithAddress(user));
    }
}
