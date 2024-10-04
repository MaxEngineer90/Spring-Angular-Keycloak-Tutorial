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
@RequestMapping(path = "/api/v1/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private final UserService userService;

    @GetMapping("/user")
    @PreAuthorize("hasRole('ETERNAL_USER')")
    public ResponseEntity<UserDTO> getUser(@AuthenticationPrincipal UserDTO user) {

        UserDTO newUser = userService.getUserWithAddress(user);
        System.out.println(newUser.getRoles());
        return ResponseEntity.ok(newUser);
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ETERNAL_ADMIN')")
    public ResponseEntity<UserDTO> getAdmin(@AuthenticationPrincipal UserDTO user) {
        return ResponseEntity.ok(userService.getUserWithAddress(user));
    }
}
