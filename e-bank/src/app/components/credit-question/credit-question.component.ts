import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-credit-question',
    imports: [CommonModule],
    templateUrl: './credit-question.component.html',
    styleUrl: './credit-question.component.css'
})
export class CreditQuestionComponent {
  Items = [
    {
      question: '1 -Pourquoi souscrire à votre ceédit en ligne  ?',
      answer: 'CREDIT DABA vous facilite les démarches et vous fait gagner du temps.Vous pouvez dès à présent, et sans vous déplacer en agence, effectuer toutes les étapes de votre souscription à votre crédit conso, depuis la simulation jusqu’à l’envoi des documents justificatifs et réception d’une copie du contrat par mail. Prévoyez un seul déplacement en agence muni des originaux de vos pièces justificatives pour la signature de votre contrat.Vous pouvez aussi profiter de l’assistance de nos téléconseillers 7j/7 de 08h à 20h par téléphone, ou chat en ligne ou mail.',
      isOpen: false,
    },
    {
      question: '2 - A qui s adresse cette offre de crédit ?',
      answer: 'La demande de souscription en ligne est accessible à TOUS: client ou non client de E-BANK  résidant au Maroc. Que vous soyez salarié, fonctionnaire ou retraité.',
      isOpen: false,
    },
    {
      question: '3 - Comment effectuer ma demande de sousscription en ligne ?',
      answer: 'Etape 1 : Renseignez les informations sur notre simulateur de crédit consommation, saisissez le code de confirmation reçu par SMS et découvrez le résultat de votre simulation.Etape 2 : Renseignez ou validez vos informations (nom, prénom, mail) afin de permettre la création de votre profil et le suivi du traitement de votre demande en ligne.Vous avez le choix entre une création simplifiée d’espace personnel en utilisant vos mêmes identifiants BMCE Direct, ou bien à travers la saisie de vos informations personnelles directement.Dès finalisation de l’étape « profil », vous serez amené à renseigner le formulaire détaillé de votre situation.Etape 3 : Obtenez l’accord de principe immédiat* accompagné d’une simulation détaillée personnalisée de votre crédit conso.Etape 4 : Dès l’obtention d’un accord de principe, vous pouvez commencer à constituer votre dossier en ligne de crédit conso, sans avoir à vous déplacer en agence.Votre dossier complet est pris en charge par nos téléconseillers qui vous assisteront dans les démarches.Etape 5 : Dès que votre demande de crédit conso est accordée, vous êtes notifié via votre espace personnel de suivi, par mail et aussi par un de nos conseillers.Une copie de votre contrat vous est envoyée par mail. Vous pouvez dès lors vous présenter en agence muni de vos originaux de pièces justificatives.*Sous réserve du respect des conditions d’octroi et d’éligibilité au crédit',
      isOpen: false,
    },
  ];

  filteredItems = [...this.Items]; // Copy for search results

  toggleAnswer(item: any): void {
    item.isOpen = !item.isOpen;
  }

  searchFAQs(event: Event): void {
    const query = (event.target as HTMLInputElement).value; // Cast target to HTMLInputElement
    this.filteredItems = this.Items.filter((item) =>
      item.question.toLowerCase().includes(query.toLowerCase())
    );
  }

}
