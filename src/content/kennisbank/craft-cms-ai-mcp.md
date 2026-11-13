---
title: 'Craft CMS en AI koppelen met MCP | Craft and Code'
heading: 'Je Craft CMS website kan nu met AI praten: wat is MCP en wat heb je eraan?'
description: 'Met MCP kan een AI-assistent zoals Claude of ChatGPT je Craft CMS website lezen en bewerken. Wat het is, welke plugins bestaan en waar je op let.'
summary:
  - 'MCP (Model Context Protocol) is een open standaard waarmee AI-assistenten veilig met andere software kunnen werken, ook met een Craft CMS website.'
  - 'Met een MCP-plugin kan je een assistent zoals Claude of Cursor vragen om content te zoeken, concepten aan te maken of teksten in bulk aan te passen.'
  - 'Goede plugins geven de assistent dezelfde rechten als de gebruiker, maken nieuwe items aan als concept en vragen bevestiging voor publiceren of verwijderen.'
  - 'Craft 6 krijgt daarnaast een ingebouwde AI-assistent in de beheeromgeving, die standaard uit staat.'
category: 'AI en websites'
publishedAt: 2026-11-13
sources:
  - title: 'Viget: Your Craft CMS Site Can Talk to AI Now'
    url: 'https://www.viget.com/articles/your-craft-cms-site-can-talk-to-ai-now'
  - title: 'Craft Plugin Store: Craft Editor MCP'
    url: 'https://plugins.craftcms.com/editor-mcp'
  - title: 'Packagist: stimmt/craft-mcp'
    url: 'https://packagist.org/packages/stimmt/craft-mcp'
  - title: 'Craft CMS: Craft 6 Beta Released'
    url: 'https://craftcms.com/blog/craft-6-beta-released'
faq:
  - q: 'Kan een AI-assistent zomaar mijn website aanpassen?'
    a: 'Niet zonder dat jij het toelaat. Je moet eerst een MCP-plugin installeren en de assistent aanmelden. Bij goede plugins krijgt de assistent dezelfde rechten als jouw account, worden nieuwe items als concept aangemaakt, en vraagt publiceren of verwijderen altijd een bevestiging.'
  - q: 'Heb ik Craft 6 nodig om met MCP te werken?'
    a: 'Nee. De MCP-plugins die vandaag bestaan werken met Craft 5. Craft 6 voegt daarnaast een eigen AI-assistent toe in de beheeromgeving.'
  - q: 'Zorgt MCP ervoor dat ChatGPT of Google mijn website beter vindt?'
    a: 'Nee, dat is iets anders. MCP laat een assistent met jouw beheeromgeving werken. Gevonden en geciteerd worden door AI-zoekmachines hangt af van duidelijke content, gestructureerde data en een goede technische basis.'
draft: false
---

Wie vandaag een AI-assistent zoals Claude, ChatGPT of Cursor gebruikt, kopieert vaak teksten heen en weer tussen het chatvenster en de beheeromgeving van de website. Met MCP hoeft dat niet meer: de assistent kan rechtstreeks met je Craft CMS website werken. In dit artikel leg ik uit wat dat betekent, welke opties er zijn en waar je op moet letten.

## Wat is MCP?

MCP staat voor **Model Context Protocol**. Het is een open standaard, eind 2024 geïntroduceerd door Anthropic, die vastlegt hoe een AI-assistent met andere software praat. Je kan het vergelijken met een stopcontact: als zowel de assistent als je website MCP ondersteunen, passen ze op elkaar, ongeacht welke assistent je gebruikt.

Een website die MCP aanbiedt, vertelt de assistent welke acties mogelijk zijn: content zoeken, een pagina lezen, een concept aanmaken, een veld aanpassen. De assistent kiest zelf welke actie past bij jouw vraag.

## Wat kan je ermee doen?

Enkele voorbeelden van taken die je in gewone taal kan vragen:

- "Zoek alle pagina's waarin onze oude bedrijfsnaam nog staat en maak een concept met de nieuwe naam."
- "Schrijf voor elk product in de categorie tuinmeubelen een korte beschrijving van maximaal twee zinnen."
- "Maak een concept voor een landingspagina voor onze opendeurdag, met dezelfde opbouw als vorig jaar."
- "Welke afbeeldingen hebben nog geen alt-tekst?"

Het voordeel zit vooral in herhalend werk over veel pagina's, waar je vandaag uren mee bezig bent in de beheeromgeving.

## Welke MCP-oplossingen bestaan er voor Craft CMS?

Op het moment van schrijven zijn er een paar opties. Ze evolueren snel, dus controleer altijd de actuele versie en ondersteuning.

| Oplossing | Type | Belangrijkste kenmerken |
| --- | --- | --- |
| Craft Editor MCP (Insyte) | Betalende plugin in de Craft Plugin Store | 15 contenttools voor pagina's, bestanden, secties, categorieën en globale instellingen. Aanmelden via je gewone Craft-login, met jouw rechten. Nieuwe items starten als concept, publiceren en verwijderen vragen bevestiging. Logboek van alle acties. Vereist Craft 5, PHP 8.2 en HTTPS. |
| stimmt/craft-mcp | Open source pakket | Vereist Craft 5.1 en PHP 8.3. Standaard uitgeschakeld op productie. Toegang per gebruiker in te stellen als alleen lezen, content of volledig. |
| happy-horizon/craft-mcp | Open source module | Werkt als Craft-module in plaats van plugin, zonder licentie. Vereist Craft 5.1. |

Daarnaast krijgt **Craft 6**, nu in beta, een eigen AI-assistent in de beheeromgeving. Die werkt binnen Craft zelf, met de rechten van de ingelogde gebruiker, en bewaart niets zonder goedkeuring. Meer daarover lees je in [Craft CMS 6 is in beta: wat verandert er voor jouw website?](/kennisbank/craft-cms-6/)

## Waar let je op?

AI die rechtstreeks in je website kan schrijven, is krachtig. Een paar zaken zijn daarom belangrijk:

1. **Rechten.** De assistent mag nooit meer kunnen dan de gebruiker die hem aanmeldt. Geef hem bij voorkeur een account met beperkte rechten.
2. **Concepten eerst.** Laat de assistent werken via concepten, en laat een mens nakijken en publiceren.
3. **Logboek.** Kies een oplossing die bijhoudt wat de assistent gedaan heeft, zodat je achteraf kan nagaan wat er veranderde.
4. **Productie of test.** Begin op een testomgeving. Sommige oplossingen staan op productie bewust standaard uit.
5. **Gegevens.** De inhoud die de assistent leest, gaat naar de AI-provider. Stem af welke content daarvoor in aanmerking komt, zeker als er klant- of persoonsgegevens in je site zitten.

## Met AI praten is iets anders dan gevonden worden door AI

Een veelvoorkomende verwarring: MCP zorgt ervoor dat **jij** via een assistent je website beheert. Het zorgt er niet voor dat ChatGPT, Perplexity of Google je website beter vinden en citeren. Daarvoor tellen andere zaken: duidelijke antwoorden op de vragen van je klanten, gestructureerde data, een snelle en toegankelijke site, en een bestand als `llms.txt` dat AI-crawlers wegwijs maakt. Dat valt onder [SEO en vindbaarheid in AI](/#website-diensten).

## Is dit iets voor jouw website?

MCP is vooral interessant als je veel content beheert of vaak dezelfde aanpassingen over veel pagina's doet. Voor een kleine site die een paar keer per jaar wijzigt, is de winst beperkt. Wil je weten of het voor jouw Craft-website zinvol is en hoe je het veilig opzet, [neem dan contact op](/contact/).
