const { Terms } = require("../models");

const termsData = [
  {
    content_en: `
      <p><strong>BY</strong> clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.</p>
      
      <p>You can use the program FOR FREE for 14 days.</p>
      
      <p>123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.</p>
      
      <p style="margin-top: 24px;">You have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.</p>
      
      <p style="margin-bottom: 24px;">If we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.</p>
      
      <p>Billing is for one year at a time.</p>
      
      <p>The price for 123 Fakturera (offer price SEK 99 per month / ordinary price SEK 159 per month) is for the annual fee Start for one year's use of the program.</p>
      
      <p>(When using the offer price of SEK 99, the one-year period is calculated from registration.)</p>
      
      <p>All prices are excluding. VAT.</p>
      
      <p>Offer, Inventory Control, Member Invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later.</p>
      
      <p>Intermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.</p>
      
      <p>The annual fee is on a continuous basis, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.</p>
      
      <p>The introductory offer ( SEK 99 per month) is for the annual fee Start for the first year. After the first year, the ordinary price is billed, which is currently, for annual fee Start, one hundred and fifty-nine kronor per month, for annual fee Remote control, three hundred kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.</p>
      
      <p>If you choose to keep the program by not notifying us by email within 14 days of registration that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help you with logo at a cost price.</p>
      
      <p>License for the use of 123 Fakturera is of course sold in accordance with applicable laws.</p>
      
      <p>In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we, for natural reasons, have to store your information.</p>
      
      <p>In connection with the storage of information, the law requires that we provide you with the following information:</p>
      
      <p>If you order as a private person, you have the right to cancel as stated by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and telephone. If you don't want to be contacted, just send us an email about it.</p>
      
      <p>You can at any time ask not to be sent information about upgrades by email, letter or the like, and we will of course not do that. You send such a request to us by email, post or similar.</p>
      
      <p>For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, letter and the like, and tell others that you are customer. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, (like K-Soft Sverige AB), which we can use to send/sell products, upgrades and the like, either by intermediation or otherwise.</p>
      
      <p>You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us <a href="https://online.123fakturera.se/us/?height=1080&width=1920" target="_blank" rel="noopener noreferrer">here</a>. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.</p>
      
      <p>If you wish to contact us, please use the information on this website.</p>
      
      <p>Click on Invoice Now to register according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)</p>
      
      <p>Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be your experience.</p>
      
      <p>Have a great day!</p>
    `,
    content_sv: `
      <p><strong>GENOM ATT</strong> klicka på Fakturera Nu så väljer ni att registrera enligt den information som ni har lagt in och texten på registrerings sidan och villkoren här, och accepterar samtidigt villkoren här.</p>
      
      <p>Ni kan använda programmet GRATIS i 14 dagar.</p>
      
      <p>123 Fakturera är så enkelt och självförklarande att chansen att ni kommer att behöva support är minimal, men om ni skulle behöva support är vi här för er, med vårt kontor bemannat under större delen av dagen. Efter provperioden fortsätter prenumerationen och kostar 99 SEK exklusive moms per månad, vilket faktureras årligen. Om ni inte vill behålla programmet, avbryt bara provperioden genom att ge anmälan innan 14 dagar från registrering.</p>
      
      <p style="margin-top: 24px;">Ni har naturligtvis rätt att avsluta användningen av programmet utan några kostnader, genom att ge oss anmälan per e-post innan 14 dagar från registrering, att ni inte vill fortsätta med programmet, och ni betalar då naturligtvis ingenting.</p>
      
      <p style="margin-bottom: 24px;">Om vi inte får en sådan anmälan från er innan 14 dagar från registrering, kan beställningen av naturliga skäl inte ändras. Med registrering menas det datum och tidpunkt när ni valde att trycka på knappen Fakturera Nu.</p>
      
      <p>Fakturering sker för ett år i taget.</p>
      
      <p>Priset för 123 Fakturera (erbjudandepris 99 SEK per månad / ordinarie pris 159 SEK per månad) är för årsavgiften Start för ett års användning av programmet.</p>
      
      <p>(Vid användning av erbjudandepriset 99 SEK beräknas ettårsperioden från registrering.)</p>
      
      <p>Alla priser är exklusive. moms.</p>
      
      <p>Offer, Lagerkontroll, Medlemsfakturering, Multianvändarversion och Engelska utskrifter är (eller kan vara) ytterligare moduler som kan beställas senare.</p>
      
      <p>Förmedling, liksom fakturering, kan ske från K-Soft Sverige AB, Box 2826, 187 28 Täby. I framtiden kan vi välja att samarbeta med ett annat företag för t.ex. förmedling och fakturering. Kundrelationen är dock med oss. Betalningen sker till det företag från vilket fakturan kommer.</p>
      
      <p>Årsavgiften är på kontinuerlig basis, men om ni inte vill fortsätta använda programmet behöver ni bara ge anmälan trettio dagar före början av nästa ettårsperiod.</p>
      
      <p>Introduktionserbjudandet (99 SEK per månad) är för årsavgiften Start för det första året. Efter det första året faktureras ordinarie pris, vilket för närvarande är, för årsavgift Start, hundrafemtionio kronor per månad, för årsavgift Fjärrstyrning, trehundra kronor per månad och för årsavgift Pro, trehundratrettiotre kronor per månad. Efter ett år faktureras årsavgiften Fjärrstyrning som standard, men ni kan välja Start eller Pro genom att ge anmälan när som helst före förfallodagen.</p>
      
      <p>Om ni väljer att behålla programmet genom att inte meddela oss per e-post inom 14 dagar från registrering att ni inte vill fortsätta med programmet, accepterar ni att ni kommer att betala fakturan för er beställning. Underlåtenhet att betala fakturan eller försenad betalning ger inte rätt att avbryta beställningen. Vi hjälper gärna er med logotyp till självkostnadspris.</p>
      
      <p>Licens för användning av 123 Fakturera säljs naturligtvis i enlighet med gällande lagar.</p>
      
      <p>För att kunna hjälpa er enklare och ge er support, samt för att följa lagarna, måste vi av naturliga skäl lagra er information.</p>
      
      <p>I samband med lagring av information kräver lagen att vi ger er följande information:</p>
      
      <p>Om ni beställer som privatperson har ni rätt att avbryta enligt lag. Er information lagras så att vi kan hjälpa er, etc. Vi kommer att använda den för att kunna hjälpa er om ni behöver hjälp, följa lagarna gällande bokföring, etc. När det finns uppgraderingar och liknande kan vi skicka er erbjudanden och liknande om våra produkter och tjänster per e-post eller liknande. Ni kan kontaktas per e-post, post och telefon. Om ni inte vill bli kontaktade, skicka bara oss ett e-postmeddelande om det.</p>
      
      <p>Ni kan när som helst be att inte få skickad information om uppgraderingar per e-post, brev eller liknande, och vi kommer naturligtvis inte att göra det. Ni skickar en sådan begäran till oss per e-post, post eller liknande.</p>
      
      <p>Av naturliga skäl måste vi lagra, behandla och flytta era data. Er information lagras tills vidare. Ni ger oss tillstånd att lagra, behandla och flytta era data, samt att skicka er erbjudanden och liknande per e-post, brev och liknande, och berätta för andra att ni är kund. På grund av hur det fungerar med programvara behöver tillstånd också ges till andra parter. Tillståndet ges därför till oss, samt till företagen och/eller person(er) som äger programvaran, källkoden, webbplatsen och liknande. Det ges också till nuvarande och framtida företag som ägs och/eller kontrolleras av en eller flera av dem som för närvarande äger och/eller kontrollerar oss. Det ges också till nuvarande och framtida företag som ägs och/eller kontrolleras av en eller flera av dem som för närvarande äger och/eller kontrollerar företagen (om några), som äger eller kommer att äga programvaran, källkoden, webbplatsen och liknande. Det ges också till nuvarande och framtida personer (om några) som äger eller kommer att äga programvaran, källkoden, webbplatsen och liknande. Detta gäller både nuvarande och framtida produkter och tjänster. Det ges också till ett annat företag, (som K-Soft Sverige AB), som vi kan använda för att skicka/sälja produkter, uppgraderingar och liknande, antingen genom förmedling eller på annat sätt.</p>
      
      <p>Ni har naturligtvis rätt att begära tillgång till, ändring och radering av informationen vi har om er. Ni har också rätt att begära begränsning av databehandling, och att invända mot databehandling och rätten till dataportabilitet. Ni har rätt att klaga till tillsynsmyndigheten. Ni kan hitta mer juridisk information om oss <a href="https://online.123fakturera.se/us/?height=1080&width=1920" target="_blank" rel="noopener noreferrer">här</a>. Irlands lagar är de tillämpliga lagarna. Att placera en beställning är naturligtvis helt frivilligt. Naturligtvis använder vi inte någon automatiserad profilering eller beslut.</p>
      
      <p>Om ni vill kontakta oss, använd informationen på denna webbplats.</p>
      
      <p>Klicka på Fakturera Nu för att registrera enligt den information ni har angett och villkoren här. (Datum och tid för antagande registreras automatiskt i våra register.)</p>
      
      <p>Vår erfarenhet är att våra kunder är mycket nöjda med hur vi arbetar och hoppas och tror att detta också kommer att vara er erfarenhet.</p>
      
      <p>Ha en bra dag!</p>
    `,
  },
];

async function seedTerms() {
  try {
    for (const term of termsData) {
      await Terms.findOrCreate({
        where: { id: 1 },
        defaults: term,
      });
    }
    console.log("Terms data seeded successfully");
  } catch (error) {
    console.error("Error seeding terms data:", error);
  }
}

module.exports = seedTerms;
