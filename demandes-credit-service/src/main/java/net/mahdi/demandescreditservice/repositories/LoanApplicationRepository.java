package net.mahdi.demandescreditservice.repositories;

import net.mahdi.demandescreditservice.entities.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {
}
