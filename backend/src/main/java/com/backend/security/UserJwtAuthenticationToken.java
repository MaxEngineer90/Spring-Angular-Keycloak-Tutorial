package com.backend.security;

import com.backend.dto.UserDTO;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Collection;

public class UserJwtAuthenticationToken extends AbstractAuthenticationToken {

    private final UserDTO user;
    private final Jwt jwt;

    public UserJwtAuthenticationToken(UserDTO user, Jwt jwt, Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        setAuthenticated(true);
        this.user = user;
        this.jwt = jwt;
    }

    @Override
    public Object getCredentials() {
        return jwt;
    }

    @Override
    public Object getPrincipal() {
        return this.user;
    }

    @Override
    public Object getDetails() {
        return this.user;
    }
}
