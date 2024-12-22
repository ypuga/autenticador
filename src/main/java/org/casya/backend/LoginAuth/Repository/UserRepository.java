package org.casya.backend.LoginAuth.Repository;

import java.util.Optional;

import org.casya.backend.LoginAuth.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
