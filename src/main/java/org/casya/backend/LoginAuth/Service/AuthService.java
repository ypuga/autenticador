package org.casya.backend.LoginAuth.Service;

import org.casya.backend.LoginAuth.Dto.LoginDto;
import org.casya.backend.LoginAuth.Models.User;
import org.casya.backend.LoginAuth.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository repository;

    public void createNewUser(LoginDto data){
        User userToSave = new User();

        userToSave.setPassword(data.getPassword());
        userToSave.setUsername(data.getUsername());
        userToSave.setProfile(data.getProfile());
        userToSave.setSucursal(data.getSucursal());
        userToSave.setZona(data.getZona());

        repository.save(userToSave);
    }

    public User findUserData(LoginDto data){
        return repository.findByUsername(data.getUsername()).get();
    }
}
