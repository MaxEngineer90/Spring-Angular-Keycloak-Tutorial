package com.backend.controller;

import com.backend.dto.UserDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class GreetingControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getGreetingUserMessage_AuthenticatedUser_ReturnsOk() throws Exception {
        UserDTO mockUser = UserDTO.builder()
                .identifier(UUID.randomUUID())
                .firstName("John")
                .lastName("Doe")
                .email("john.doe@example.com")
                .password("password")
                .roles(List.of("ETERNAL_USER"))
                .build();

        mockMvc.perform(get("/api/v1/greetings/greet/user")
                        .with(user(mockUser)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("Welcome John Doe you are in user role"));
    }


    @Test
    public void getGreetingAdminMessage_AuthenticatedAdmin_ReturnsOk() throws Exception {
        UserDTO mockAdminAlice = UserDTO.builder()
                .identifier(UUID.randomUUID())
                .firstName("Alice")
                .lastName("Administrator")
                .email("alice.admin@example.com")
                .password("securepassword")
                .roles(List.of("ETERNAL_ADMIN"))
                .build();


        mockMvc.perform(get("/api/v1/greetings/greet/admin")
                        .with(user(mockAdminAlice)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("Welcome Alice Administrator you are in admin role"));
    }


    @Test
    public void getGreetingAdminMessage_NonAdminUser_ReturnsUnauthorized() throws Exception {
        UserDTO mockRegularUser = UserDTO.builder()
                .identifier(UUID.randomUUID())
                .firstName("Bob")
                .lastName("User")
                .email("bob.user@example.com")
                .password("password")
                .roles(List.of("ETERNAL_USER"))
                .build();

        mockMvc.perform(get("/api/v1/greetings/greet/admin")
                        .principal(() -> String.valueOf(mockRegularUser)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void getGreetingAdminMessage_WrongRole_ReturnsUnauthorized() throws Exception {
        UserDTO mockIncorrectRoleUser = UserDTO.builder()
                .identifier(UUID.randomUUID())
                .firstName("Charlie")
                .lastName("Mismatch")
                .email("charlie.mismatch@example.com")
                .password("password")
                .roles(List.of("NON_EXISTENT_ROLE"))
                .build();

        mockMvc.perform(get("/api/v1/greetings/greet/admin")
                        .principal(() -> String.valueOf(mockIncorrectRoleUser)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void getGreetingAdminMessage_UserWithoutSpecificAuthority_ReturnsForbidden() throws Exception {
        UserDTO mockSpecialRoleUser = UserDTO.builder()
                .identifier(UUID.randomUUID())
                .firstName("Clark")
                .lastName("Kent")
                .email("clark.kent@example.com")
                .password("password")
                .roles(List.of("ETERNAL_USER"))
                .build();

        mockMvc.perform(get("/api/v1/greetings/greet/admin")
                        .with(user(mockSpecialRoleUser)))
                .andExpect(status().isForbidden());
    }

    @Test
    public void getGreetingAdminMessage_UserWithImproperlyPrefixedRole_ReturnsForbidden() throws Exception {
        UserDTO mockAdminUser = UserDTO.builder()
                .identifier(UUID.randomUUID())
                .firstName("Alice")
                .lastName("Wonderland")
                .email("alice@example.com")
                .password("password")
                .roles(List.of("ADMIN"))
                .build();

        mockMvc.perform(get("/api/v1/greetings/greet/admin")
                        .with(user(mockAdminUser)))
                .andExpect(status().isForbidden());
    }

}
