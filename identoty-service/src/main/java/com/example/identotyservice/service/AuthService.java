package com.example.identotyservice.service;

import com.example.identotyservice.entity.UserCredential;
import com.example.identotyservice.repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserCredentialRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

   @Autowired
    private JWTService jwtService;


    public String saveUser(UserCredential credential){
        credential.setPassword(passwordEncoder.encode(credential.getPassword()));
        repository.save(credential);
        return "User  added to the system";
    }

    public String  generateToken(String username){
        return jwtService.generateToken(username);

    }
    public void validateToken(String token){
         jwtService.validateToken(token);
    }


}
