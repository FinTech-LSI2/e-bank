package com.banque.authentication_service.controller;

import com.banque.authentication_service.dto.LoginRequest;
import com.banque.authentication_service.dto.TokenResponse;
import com.banque.authentication_service.entity.AuthUser;
import com.banque.authentication_service.service.AuthService;
import com.banque.authentication_service.util.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final AuthService authService;


    @Autowired
    private RestTemplate restTemplate;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, AuthService authService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.authService = authService;
    }


    @PostMapping("/loginEmploye")
    public ResponseEntity<TokenResponse> loginEmploye(@RequestBody @Valid LoginRequest request) {
        try {
            // Appeler le microservice pour récupérer les informations de l'employé
            String url = "http://localhost:9092/api/client/clients" + request.getUsername();
            AuthUser user = fetchUser(url);

            // Vérifier le mot de passe
            validateCredentials(user, request.getPassword());

            // Générer un token JWT
            String token = jwtUtil.generateToken(user.getUsername(), "employe");
            return ResponseEntity.ok(new TokenResponse(token));
        } catch (CustomAuthenticationException e) {
            return ResponseEntity.status(401).body(new TokenResponse(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new TokenResponse("Internal server error"));
        }
    }

    @PostMapping("/loginClient")
    public ResponseEntity<TokenResponse> loginClient(@RequestBody @Valid LoginRequest request) {
        try {
            // Appeler le microservice pour récupérer les informations du client
            String url = "http://client-service/api/clients/" + request.getUsername();
            AuthUser client = fetchUser(url);

            // Vérifier le mot de passe
            validateCredentials(client, request.getPassword());

            // Générer un token JWT
            String token = jwtUtil.generateToken(client.getUsername(),"client");
            return ResponseEntity.ok(new TokenResponse(token));
        } catch (CustomAuthenticationException e) {
            return ResponseEntity.status(401).body(new TokenResponse(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new TokenResponse("Internal server error"));
        }
    }

    // Méthode utilitaire pour récupérer un utilisateur depuis un microservice
    private AuthUser fetchUser(String url) {
        ResponseEntity<AuthUser> response = restTemplate.getForEntity(url, AuthUser.class);
        if (response.getBody() == null) {
            throw new CustomAuthenticationException("User not found");
        }
        return response.getBody();
    }

    // Méthode utilitaire pour valider les identifiants
    private void validateCredentials(AuthUser user, String password) {
        if (!user.getPassword().equals(password)) {
            throw new CustomAuthenticationException("Invalid credentials");
        }
    }
}


