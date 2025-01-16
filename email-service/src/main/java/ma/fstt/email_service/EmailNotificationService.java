package ma.fstt.email_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailNotificationService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendCreditResponseEmail(CreditResponse creditResponse) {
        // Build email content
        String subject = "Credit Response Notification";
        String message = String.format(
                "Dear Customer,\n\nYour credit demand (ID: %d) has been %s.\n\nThank you for choosing our services.\n",
                creditResponse.getIdCreditDemand(),
                creditResponse.getCreditResponse()
        );

        // Create and send the email
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(creditResponse.getEmail());
        email.setSubject(subject);
        email.setText(message);

        mailSender.send(email);
    }
}
