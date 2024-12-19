package net.mahdi;

public class RIBGenerator {

    public class RibGenerator {
        public static String generateRib(Long numCompte) {
            final String CODE_BANQUE = "011 ";
            final String CODE_GUICHET = "780 ";
            final String CLE_RIB = " 96";
            String numCompteStr = String.format("%016d", numCompte);
            return CODE_BANQUE + CODE_GUICHET + numCompteStr + CLE_RIB;
        }
    }

    public static void main(String[] args) {
        Long idClient = 1L; // Remplacez par un idClient réel
        String rib = RibGenerator.generateRib(idClient);
        System.out.println("RIB généré : " + rib);
        System.out.println("lenght : " + rib.length());
    }
}
