package com.backend.security;

import com.backend.dto.UserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class UserJwtAuthenticationConverter implements Converter<Jwt, AbstractAuthenticationToken> {

    private static final String RESOURCE_ACCESS = "resource_access";
    private static final String ETERNAL_BACKEND = "eternal_backend";
    private static final String ROLES = "roles";
    private static final String FIRST_NAME_CLAIM = "given_name";
    private static final String LAST_NAME_CLAIM = "family_name";
    private static final String EMAIL_CLAIM = "email";

    @Override
    public AbstractAuthenticationToken convert(Jwt jwt) {
        UserDTO productUser = UserDTO.builder()
                .identifier(UUID.fromString(jwt.getSubject()))
                .firstName(jwt.getClaimAsString(FIRST_NAME_CLAIM))
                .lastName(jwt.getClaimAsString(LAST_NAME_CLAIM))
                .email(jwt.getClaimAsString(EMAIL_CLAIM))
                .password("n/a")
                .roles(getRolesFromToken(jwt))
                .build();
        return new UserJwtAuthenticationToken(productUser, jwt, productUser.getAuthorities());
    }

    private List<String> getRolesFromToken(Jwt jwt) {
        Map<String, Object> claims = jwt.getClaims();
        Map<String, Map<String, List<String>>> resourceAccess =
                (Map<String, Map<String, List<String>>>) claims.getOrDefault(RESOURCE_ACCESS, Collections.emptyMap());


        Map<String, List<String>> backendRoles = resourceAccess.getOrDefault(ETERNAL_BACKEND, Collections.emptyMap());

        List<String> roles = backendRoles.getOrDefault(ROLES, Collections.emptyList());
        return roles.stream().map(String::toUpperCase).collect(Collectors.toList());
    }
}
