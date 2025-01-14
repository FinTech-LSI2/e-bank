package net.mahdi.demandescreditservice.serivices;

import net.mahdi.demandescreditservice.DTOs.LoanApplicationDTO;
import net.mahdi.demandescreditservice.entities.LoanApplication;
import net.mahdi.demandescreditservice.enums.LoanApplicationStatus;
import net.mahdi.demandescreditservice.repositories.LoanApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanApplicationService {

    private final LoanApplicationRepository loanApplicationRepository;

    @Autowired
    public LoanApplicationService(LoanApplicationRepository loanApplicationRepository) {
        this.loanApplicationRepository = loanApplicationRepository;
    }


    public LoanApplication createLoanApplication(LoanApplicationDTO loanApplicationDTO) {
        LoanApplication loanApplication = new LoanApplication();
        loanApplication.setCin(loanApplicationDTO.getCin());
        loanApplication.setName(loanApplicationDTO.getName());
        loanApplication.setPersonAge(loanApplicationDTO.getPersonAge());
        loanApplication.setPersonIncome(loanApplicationDTO.getPersonIncome());
        loanApplication.setPersonHomeOwnership(loanApplicationDTO.getPersonHomeOwnership());
        loanApplication.setPersonEmpLength(loanApplicationDTO.getPersonEmpLength());
        loanApplication.setLoanIntent(loanApplicationDTO.getLoanIntent());
        loanApplication.setLoanAmnt(loanApplicationDTO.getLoanAmnt());
        loanApplication.setLoanPercentIncome(loanApplicationDTO.getLoanPercentIncome());
        loanApplication.setCbPersonDefaultOnFile(loanApplicationDTO.getCbPersonDefaultOnFile());
        loanApplication.setCbPersonCredHistLength(loanApplicationDTO.getCbPersonCredHistLength());

        return loanApplicationRepository.save(loanApplication);
    }


    public LoanApplication getLoanApplication(Long id) {
        return loanApplicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan application not found"));
    }


    public void updateLoanApplication(LoanApplication loanApplication) {
        loanApplicationRepository.save(loanApplication);
    }

    public List<LoanApplication> getAllLoanApplications() {
        return loanApplicationRepository.findAll();
    }
}
