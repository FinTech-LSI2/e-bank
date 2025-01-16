package ma.fstt.email_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
public class CreditResponseController {

    @Autowired
    private EmailNotificationService emailNotificationService;

    @PostMapping("/send")
    public ResponseEntity<String> sendNotification(@RequestBody CreditResponse creditResponse) {
        emailNotificationService.sendCreditResponseEmail(creditResponse);
        return ResponseEntity.ok("Notification email sent successfully.");
    }


}
