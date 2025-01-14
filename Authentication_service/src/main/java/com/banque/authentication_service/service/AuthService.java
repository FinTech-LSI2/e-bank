package com.banque.authentication_service.service;

import com.banque.authentication_service.entity.AuthUser;
import com.banque.authentication_service.repository.AuthUserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final AuthUserRepository authUserRepository;

    public AuthService(AuthUserRepository authUserRepository) {
        this.authUserRepository = authUserRepository;
    }

    public AuthUser validateUser(String username, String password) {
        AuthUser user = authUserRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Comparaison directe des mots de passe (en clair)
        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}