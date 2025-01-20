# README - Backend Architecture

## Description du Backend
L'architecture backend repose sur une approche basée sur les microservices, intégrant divers composants pour garantir la modularité, la scalabilité et la robustesse du système. Voici les principaux éléments et leur rôle dans cette architecture :

![image](https://github.com/user-attachments/assets/ba4d47c0-d0cb-43a0-86ab-3798c0935a9f)
 

### 1. Spring Cloud Gateway
- **Point d'entrée principal** pour toutes les requêtes clients.
- Fournit des fonctionnalités comme :
  - Le routage intelligent.
  - La gestion des autorisations.
  - La mise en œuvre des règles de sécurité.
- Permet de **centraliser les appels** vers les différents microservices.

### 2. Services Microservices
Chaque microservice est autonome, spécialisé dans une fonctionnalité précise et communique avec les autres via des API REST ou des événements Kafka.

#### Transaction-Service
- Gère les transactions et interagit avec une base de données **MySQL**.
- Utilise **Kafka** pour la gestion des événements asynchrones.

#### Clients-Service
- Responsable de la gestion des informations sur les clients et les comptes bancaires.
- Connecté à une base de données **MySQL** pour le stockage des données.

#### Finance-Service
- Assure l’échange de devises ainsi qu'un simulateur de crédit.

#### Email-Service
- Envoie des e-mails aux demandeurs de crédit pour les informer de l'acceptation ou du refus de leur demande.

#### Employée-Service
- Gère les employés et leurs informations.
- Utilise une base de données **MySQL**.

#### Authentification-Service
- Gère l'authentification et l'autorisation des utilisateurs.

### 3. Kafka
- Utilisé comme un **bus d'événements** pour la communication asynchrone entre les services.
- Garantit :
  - Une **haute disponibilité**.
  - Une gestion efficace des événements.

### 4. Eureka (Discovery Service)
- Implémente le **service de découverte**, permettant à chaque microservice de s'enregistrer dynamiquement et de découvrir d'autres services.
- Facilite :
  - Le routage dynamique.
  - La tolérance aux pannes.

### 5. Bases de Données MySQL
- Chaque microservice possède sa propre base de données pour garantir l'indépendance et éviter les conflits de données.
