package com.backend.security;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class KeycloakRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {


    @Override
    public Collection<GrantedAuthority> convert(final Jwt jwt) {

        final Map<String, Object> claims = jwt.getClaims();

        final Map<String, Map<String, List<String>>> resourceAccess =
                (Map<String, Map<String, List<String>>>) claims.getOrDefault("resource_access", Collections.emptyMap());

        Map<String, List<String>> backendRoles = resourceAccess.getOrDefault("eternal_backend", Collections.emptyMap());

        return backendRoles.getOrDefault("roles", Collections.emptyList()).stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }
}