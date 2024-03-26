package com.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class GreetingControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getGreetingUserMessage_WithJwt_ShouldReturnOk() throws Exception {
        mockMvc.perform(get("/api/v1/greetings/greet/user")
                        .with(SecurityMockMvcRequestPostProcessors.jwt().authorities(new SimpleGrantedAuthority("ROLE_eternal_user"))))
                .andExpect(status().isOk());
    }

    @Test
    public void getGreetingAdminMessage_WithJwt_ShouldReturnOk() throws Exception {
        mockMvc.perform(get("/api/v1/greetings/greet/admin")
                        .with(SecurityMockMvcRequestPostProcessors.jwt().authorities(new SimpleGrantedAuthority("ROLE_eternal_admin"))))
                .andExpect(status().isOk());
    }

    @Test
    public void getGreetingUserMessage_WithoutRequiredRole_ShouldReturnForbidden() throws Exception {
        mockMvc.perform(get("/api/v1/greetings/greet/user")
                        .with(SecurityMockMvcRequestPostProcessors.jwt().authorities(new SimpleGrantedAuthority("ROLE_NOT_CORRECT"))))
                .andExpect(status().isForbidden());
    }

    @Test
    public void getGreetingAdminMessage_WithoutRequiredRole_ShouldReturnForbidden() throws Exception {
        mockMvc.perform(get("/api/v1/greetings/greet/admin")
                        .with(SecurityMockMvcRequestPostProcessors.jwt().authorities(new SimpleGrantedAuthority("ROLE_ANOTHER_NOT_CORRECT"))))
                .andExpect(status().isForbidden());
    }
}
