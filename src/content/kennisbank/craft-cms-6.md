---
title: 'Craft CMS 6 beta: wat verandert er? | Craft and Code'
heading: 'Craft CMS 6 is in beta: wat verandert er voor jouw website?'
description: 'Craft CMS 6 staat in beta, de stabiele versie volgt in maart. Wat er nieuw is voor redacteuren, wat er technisch verandert en wanneer je best upgradet.'
summary:
  - 'Craft CMS 6 is op 10 november 2026 in beta gegaan. De stabiele versie is gepland voor maart, na een beta van ongeveer vier maanden.'
  - 'Voor redacteuren is er een vernieuwde beheeromgeving met donkere modus, een zoekbalk voor alles (⌘K), een AI-assistent (⌘I), vergelijken van versies en reacties per pagina.'
  - 'Technisch draait Craft 6 voor een groot deel op Laravel. Een aparte adapter houdt bestaande Craft 5 plugins werkend tijdens de overstap.'
  - 'Craft 5 krijgt nog beveiligingsupdates tot maart 2032. Een beta-versie zet je niet op een live website: plan de upgrade na de stabiele release.'
category: 'Craft CMS'
publishedAt: 2026-11-13
sources:
  - title: 'Craft CMS: Craft 6 Beta Released'
    url: 'https://craftcms.com/blog/craft-6-beta-released'
faq:
  - q: 'Moet ik mijn website nu al upgraden naar Craft 6?'
    a: 'Nee. Een beta is bedoeld om te testen, niet voor een live website. De stabiele versie is gepland voor maart, en Craft 5 krijgt nog beveiligingsupdates tot maart 2032. Je hebt dus tijd om de upgrade rustig te plannen.'
  - q: 'Werken mijn plugins nog in Craft 6?'
    a: 'De meeste plugins van Craft zelf ondersteunen Craft 5 en 6 al. Voor plugins van andere ontwikkelaars hangt het af van wanneer zij updaten. Een optionele adapter houdt plugins die op de oude Craft 5 basis gebouwd zijn tijdelijk werkend, maar een controle per plugin blijft nodig.'
  - q: 'Zet Craft 6 automatisch AI aan op mijn website?'
    a: 'Nee. De AI-assistent in de beheeromgeving staat uit tot een beheerder een AI-provider instelt. Daarna werkt de assistent met de rechten van de ingelogde gebruiker en bewaart hij niets zonder goedkeuring.'
draft: false
---

Pixel & Tonic, het bedrijf achter Craft CMS, noemt Craft 6 de grootste release in de geschiedenis van het CMS. Sinds 10 november 2026 kan je de beta uitproberen. In dit artikel zet ik op een rij wat er verandert, wat het betekent voor wie een Craft-website beheert, en wanneer een upgrade zinvol is.

## Wat is Craft CMS ook alweer?

Craft CMS is het beheersysteem achter websites die op maat gebouwd worden. Je beheert er je pagina's, nieuws, producten en afbeeldingen mee. Het verschil met een systeem als WordPress: er is geen kant-en-klaar thema, maar een structuur die rond jouw inhoud gebouwd wordt. Craft and Code bouwt [websites op maat met Craft CMS](/#diensten).

## Wat is er nieuw voor wie de website beheert?

Het grootste deel van de vernieuwing zit in de beheeromgeving, de plek waar je dagelijks teksten en beelden aanpast.

- **Nieuwe beheeromgeving.** Volledig opnieuw opgebouwd, met een lichte, donkere of automatische weergave. Per gebruikersgroep kan je bepalen welke menu-items zichtbaar zijn.
- **Beter op gsm en tablet.** De lay-out is herwerkt voor kleinere schermen. Ook gekoppelde items herschikken werkt nu met je vinger.
- **Zoeken naar alles (⌘K).** Eén zoekvenster voor pagina's, afbeeldingen, instellingen en documentatie. Je kan er ook acties mee uitvoeren, met dezelfde rechten als in de rest van het systeem.
- **AI-assistent (⌘I).** Een ingebouwde assistent die voorstellen doet, bijvoorbeeld voor teksten. Hij werkt met de rechten van de ingelogde gebruiker en bewaart niets zonder jouw goedkeuring. AI staat standaard uit, tot een beheerder een AI-provider instelt.
- **Vergelijken.** Zet twee versies van een pagina naast elkaar, of een concept naast de live versie, en neem velden met één klik over.
- **Kopiëren en plakken van velden**, binnen Craft en via het gewone klembord.
- **Reacties en tijdlijn.** Per pagina zie je wie wat wijzigde, en je kan reacties achterlaten en collega's vermelden.
- **Live voorbeeld** staat voortaan rechts naast je bewerkingsscherm.

### Afbeeldingen en bestanden

Uploads lopen op de achtergrond verder, dubbele bestanden worden herkend, en metadata uit foto's wordt getoond. Craft 6 kan met AI ook alt-teksten, titels, tags en het focuspunt van een afbeelding voorstellen. Dat laatste is handig voor [toegankelijkheid](/#website-diensten) en vindbaarheid, op voorwaarde dat iemand de voorstellen nakijkt.

### Werken met meerdere mensen

In de Pro- en Enterprise-edities komen goedkeuringsflows in meerdere stappen: een redacteur schrijft, iemand anders keurt goed. Je kan ook meerdere concepten bundelen in een release die op een vast moment samen live gaat, bijvoorbeeld voor een campagne of productlancering.

## Wat verandert er technisch?

Onder de motorkap draait Craft 6 voor een groot deel op Laravel, een veelgebruikt PHP-framework. Routing, aanmelden, sessies, mail en databasemigraties lopen voortaan via Laravel. Voor jou als websiteeigenaar verandert er daardoor weinig zichtbaars, maar het maakt het makkelijker om maatwerk en koppelingen te bouwen met bestaande Laravel-tools.

Craft 5 was gebouwd op het Yii-framework. Om de overstap haalbaar te houden zijn er drie hulpmiddelen:

| Hulpmiddel | Wat het doet |
| --- | --- |
| craft6-revamp | Automatiseert een groot deel van de voorbereiding van een Craft 5 project. |
| Yii2-adapter | Optioneel pakket dat bestaande plugins en modules werkend houdt op Craft 6, terwijl ze bijgewerkt worden. |
| Yii2 Loose Ends | Toont wat nog afhankelijk is van de adapter en lost een deel daarvan zelf op. |

Pixel & Tonic werkt ook verder aan toegankelijkheid van de beheeromgeving richting WCAG 2.2 AA.

## Wanneer upgrade je best?

De beta loopt ongeveer vier maanden, met een stabiele release gepland in maart. Craft 5 krijgt daarna nog vijf jaar beveiligingsupdates, tot maart 2032. Er is dus geen reden tot haast.

Mijn advies:

1. **Zet geen beta op een live website.** Test hem op een kopie als je benieuwd bent.
2. **Maak een lijst van je plugins** en controleer per plugin of er een Craft 6 versie is of komt.
3. **Plan de upgrade na de stabiele release**, en combineer hem met andere werken aan je site, zoals een opfrissing van het ontwerp of nieuwe functies.
4. **Bekijk welke nieuwe functies je echt gebruikt.** Goedkeuringsflows en releases zitten enkel in Pro en Enterprise.

Hoeveel werk een upgrade is, hangt af van hoeveel maatwerk en plugins je site gebruikt. Dat is een inschatting per project. Heb je een Craft-website en wil je weten wat de overstap voor jou betekent, [neem dan contact op](/contact/).
