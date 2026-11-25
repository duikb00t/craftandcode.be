---
title: 'Craft CMS 5.12 en AI: ingebouwde MCP | Craft and Code'
heading: 'Je Craft CMS website kan nu met AI praten: wat is MCP en wat heb je eraan?'
description: 'Craft CMS 5.12 heeft ingebouwde MCP. Wat het is, hoe een AI-assistent binnen je rechten werkt, hoe je het instelt en wat je doet bij problemen.'
summary:
  - 'Sinds Craft CMS 5.12 zit MCP (Model Context Protocol) standaard in Craft. Het staat uit tot een beheerder het aanzet onder Settings → MCP.'
  - 'Een AI-assistent zoals Claude of Cursor verbindt via een login met je Craft-account (OAuth) en werkt binnen de rechten van die gebruiker.'
  - 'Bij het verbinden kies je een toegangsniveau: alleen lezen, lezen en schrijven, of volledige toegang. Volledige toegang kan enkel voor admins.'
  - 'Plugins blijven nuttig voor extra tools of voor sites die nog op een oudere Craft-versie draaien.'
  - 'Craft 6 krijgt daarnaast een ingebouwde AI-assistent in de beheeromgeving, die standaard uit staat.'
category: 'AI en websites'
publishedAt: 2026-11-13
updatedAt: 2026-11-25
sources:
  - title: 'Craft CMS documentatie: MCP'
    url: 'https://craftcms.com/docs/5.x/system/mcp'
  - title: 'Craft CMS: Craft 5.12 Released'
    url: 'https://craftcms.com/blog/craft-5-12-released'
  - title: 'GitHub: Craft CMS 5.12.0 release notes'
    url: 'https://github.com/craftcms/cms/releases/tag/5.12.0'
  - title: 'Craft Plugin Store: Craft CMS MCP (Stimmt)'
    url: 'https://plugins.craftcms.com/mcp'
  - title: 'Viget: Your Craft CMS Site Can Talk to AI Now'
    url: 'https://www.viget.com/articles/your-craft-cms-site-can-talk-to-ai-now'
  - title: 'Craft Plugin Store: Craft Editor MCP'
    url: 'https://plugins.craftcms.com/editor-mcp'
  - title: 'Packagist: stimmt/craft-mcp'
    url: 'https://packagist.org/packages/stimmt/craft-mcp'
  - title: 'Craft CMS: Craft 6 Beta Released'
    url: 'https://craftcms.com/blog/craft-6-beta-released'
faq:
  - q: 'Kan een AI-assistent mijn site wijzigen zonder toestemming?'
    a: 'Nee. MCP staat in Craft standaard uit. Wie een assistent verbindt, logt in met zijn eigen Craft-account en kiest een toegangsniveau. De assistent kan nooit meer dan die gebruiker. Laat nieuwe content als draft aanmaken en publiceer zelf.'
  - q: 'Heb ik Craft 6 nodig om met MCP te werken?'
    a: 'Nee. Vanaf Craft 5.12 is MCP ingebouwd. Craft 6 voegt daarnaast een eigen AI-assistent toe in de beheeromgeving.'
  - q: 'Heb ik nog een plugin nodig?'
    a: 'Niet voor de basis, vanaf Craft 5.12. Een plugin kan wel extra tools toevoegen, bijvoorbeeld voor diagnose. Voor sites op een oudere Craft-versie blijft een plugin de enige optie.'
  - q: 'Werkt dit op elke hosting?'
    a: 'Meestal wel, maar soms is een kleine aanpassing nodig, bijvoorbeeld wanneer de webserver de Authorization-header niet doorgeeft of een firewall de beheeromgeving afschermt. De sectie over veelvoorkomende problemen legt uit wat je dan doet.'
  - q: 'Zorgt MCP ervoor dat ChatGPT of Google mijn website beter vindt?'
    a: 'Nee, dat is iets anders. MCP laat een assistent met jouw beheeromgeving werken. Gevonden en geciteerd worden door AI-zoekmachines hangt af van duidelijke content, gestructureerde data en een goede technische basis.'
draft: false
---

Wie vandaag een AI-assistent zoals Claude, ChatGPT of Cursor gebruikt, kopieert vaak teksten heen en weer tussen het chatvenster en de beheeromgeving van de website. Met MCP hoeft dat niet meer: de assistent kan rechtstreeks met je Craft CMS website werken. Sinds Craft 5.12, uitgebracht op 3 november 2026, zit dat standaard in Craft. In dit artikel leg ik uit wat dat betekent, welke opties er zijn, waar je op moet letten en hoe je het instelt.

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

Draait je site op Craft 5.12 of hoger, dan is de ingebouwde server de standaardkeuze. De plugins zijn een aanvulling, of een oplossing voor oudere versies. Deze tools evolueren snel, dus controleer altijd de actuele versie en ondersteuning.

| Oplossing | Wat | Wanneer |
| --- | --- | --- |
| Ingebouwde MCP-server (Craft 5.12+) | Een authenticated server (login via OAuth, binnen de rechten van de gebruiker), een publieke server (enkel content die je goedkeurt, zonder login) en een lokale stdio-server via `php craft mcp/serve`. | Standaardkeuze |
| stimmt/craft-mcp 2.x | Voegt vanaf versie 2.0 extra tools toe aan de server van Craft, vooral voor diagnose en voor developers. Vereist Craft 5.12.1 of hoger. | Als je meer inzicht in de installatie wilt |
| Craft Editor MCP (Insyte), happy-horizon/craft-mcp | Een eigen MCP-server als plugin of module, los van de server van Craft. | Vooral voor sites onder Craft 5.12 |

Combineer je een plugin met de ingebouwde server, kijk dan na of hun paden en configuratie niet botsen. De plugin van Stimmt heeft als handle `mcp`, waardoor een Craft-endpoint dat met `/admin/mcp` begint bij de plugin kan uitkomen. Craft Editor MCP gebruikt `/mcp`, hetzelfde pad als de publieke server van Craft. En happy-horizon/craft-mcp gebruikt net als Craft het bestand `config/mcp.php`.

Daarnaast krijgt **Craft 6**, nu in beta, een eigen AI-assistent in de beheeromgeving. Die werkt binnen Craft zelf, met de rechten van de ingelogde gebruiker, en bewaart niets zonder goedkeuring. Meer daarover lees je in [Craft CMS 6 is in beta: wat verandert er voor jouw website?](/kennisbank/craft-cms-6/)

## Waar let je op?

AI die rechtstreeks in je website kan schrijven, is krachtig. Een paar zaken zijn daarom belangrijk:

1. **Rechten.** De assistent kan nooit meer dan de gebruiker die hem verbindt. Geef hem bij voorkeur een account met beperkte rechten.
2. **Toegangsniveaus.** Bij het verbinden kies je *Read only* (`mcp:read`), *Read and write* (`mcp:write`) of *Full access* (`mcp:admin`, enkel voor admins). Een toegangsniveau kan een assistent alleen beperken. Het geeft nooit meer rechten dan de gebruiker zelf heeft.
3. **Craft Solo.** Solo heeft maar één gebruiker, en die is admin. Een beperkt account aanmaken kan dus niet. Kies daar bewust *Read and write* en geen volledige toegang, en laat wijzigingen als draft klaarzetten. Voor echte rechtenscheiding, bijvoorbeeld een aparte gebruiker die drafts mag maken maar niet publiceren, heb je Craft Team of Pro nodig.
4. **Lokale stdio-server.** `php craft mcp/serve --user=...` is niet beperkt door de OAuth-toegangsniveaus: de assistent kan alles wat die gebruiker kan. Gebruik hem niet met een admin-account op een productiedatabase.
5. **Concepten eerst.** Laat de assistent werken via drafts, en laat een mens nakijken en publiceren.
6. **Logboek.** Hou bij wat de assistent gedaan heeft, zodat je achteraf kan nagaan wat er veranderde. Drafts en revisies in Craft helpen daarbij.
7. **Productie of test.** Begin op een test- of stagingomgeving. De ingebouwde server staat standaard uit, ook op productie.
8. **Gegevens.** De inhoud die de assistent leest, gaat naar de AI-provider. Stem af welke content daarvoor in aanmerking komt, zeker als er klant- of persoonsgegevens in je site zitten.

## Met AI praten is iets anders dan gevonden worden door AI

Een veelvoorkomende verwarring: MCP zorgt ervoor dat **jij** via een assistent je website beheert. Het zorgt er niet voor dat ChatGPT, Perplexity of Google je website beter vinden en citeren. Daarvoor tellen andere zaken: duidelijke antwoorden op de vragen van je klanten, gestructureerde data, een snelle en toegankelijke site, en een bestand als `llms.txt` dat AI-crawlers wegwijs maakt. Dat valt onder [SEO en vindbaarheid in AI](/#website-diensten).

Craft 5.12 heeft wel een **publieke MCP-server**. Die toont enkel content die je zelf goedkeurt, zonder login. Volgens de release notes kunnen externe agents hem ontdekken via `/.well-known/ai-catalog.json`. Dat is een optie, geen garantie op betere zichtbaarheid in ChatGPT, Perplexity of Google: daar is vandaag geen bewijs voor. Laat hem uit, tenzij je bewust content wilt openstellen.

## MCP instellen in Craft 5.12: stap voor stap

Deze sectie is bedoeld voor developers en technisch onderlegde beheerders. Doe dit best eerst op een test- of stagingomgeving.

**1. Update naar Craft 5.12 of hoger.** Neem de laatste patchversie. Controleren kan met:

```bash
composer show craftcms/cms
```

Let op: `php craft --version` bestaat niet.

**2. Zet de server aan.** Doe dit in een omgeving waar `allowAdminChanges` aan staat, meestal lokaal: Settings → MCP → Authenticated → enable. Met de standaard control panel-URL zijn de endpoints `/admin/mcp` en `/admin/mcp/auth`. De instelling wordt in de project config opgeslagen. Commit dus `config/project/`, deploy en voer op de server uit:

```bash
php craft up
```

**3. Genereer per omgeving OAuth-sleutels.**

```bash
php craft oauth/generate-keys
chmod 600 storage/oauth-private.key
```

De sleutels komen in `storage/` terecht (`oauth-private.key` en `oauth-public.key`).

- Werk je met release-gebaseerde deploys (Deployer, Envoyer, ...)? Zorg dat `storage/` een gedeelde map is, anders verdwijnen de sleutels bij elke deploy.
- Zet de sleutels nooit in Git. Kopieer ze ook niet tussen omgevingen: elke omgeving krijgt eigen sleutels.

**4. Optioneel: geef de assistent instructies** in `config/mcp.php`:

```php
<?php
use craft\config\McpConfig;

return McpConfig::create()
    ->instructions('Maak nieuwe content altijd als draft aan. Volg de schrijfrichtlijnen van de site.');
```

Je kan hiervoor ook environment variables gebruiken met de prefix `CRAFT_MCP_`, bijvoorbeeld `CRAFT_MCP_INSTRUCTIONS`.

**5. Controleer of het endpoint bereikbaar is.**

```bash
curl -s -o /dev/null -w "%{http_code}\n" -H "Accept: text/html" https://jouwdomein.be/admin/mcp
```

In een browser toont het endpoint een setup-pagina. Andere GET-requests krijgen volgens de documentatie een 405, vandaar de `Accept`-header die een browser nabootst. Krijg je een 200 of een 405, dan bestaat het endpoint. Een 404 betekent dat de server niet aanstaat of dat de project config nog niet toegepast is.

**6. Verbind Claude Code** vanuit je lokale projectmap:

```bash
claude mcp add --transport http mijnsite https://jouwdomein.be/admin/mcp/auth
```

Start `claude`, ga naar `/mcp`, kies de server en kies *Authenticate*. Log in de browser in en kies een toegangsniveau. De standaard scope (`local`) bewaart de configuratie enkel op je eigen machine. Gebruik `--scope project` alleen als je bewust een `.mcp.json` met je team wilt delen.

Gebruik je een andere client, zoals Claude Desktop, Cursor of ChatGPT? Open dan het endpoint in je browser. Craft toont daar de setup-instructies per client.

**7. Test in deze volgorde.** Vraag eerst iets wat enkel leest, bijvoorbeeld "Geef een overzicht van de sections en entry types". Laat daarna één testentry als draft aanmaken, en controleer in het control panel dat het echt een draft is.

## Veelvoorkomende problemen

| Symptoom | Oorzaak | Oplossing |
| --- | --- | --- |
| 404 op `/admin/mcp` | De server staat niet aan, of de project config is niet toegepast. | Aanzetten onder Settings → MCP, deployen en `php craft up` uitvoeren. |
| Inloggen lukt, maar de client blijft op "needs sign-in" staan of zegt dat de credentials geweigerd worden | Apache, vaak met PHP-FPM en typisch bij shared hosting, stript de Authorization-header. Craft ziet het token dan nooit. | Pas `web/.htaccess` aan, zie hieronder. |
| Na een deploy werkt niets meer | De OAuth-sleutels zijn overschreven of verwijderd. | Stel `storage/` in als gedeelde map. Let op deploys met `rsync --delete`. |
| Verbinding geblokkeerd of een challenge-pagina | Een WAF- of Cloudflare-regel op `/admin`, zoals een landenfilter of Bot Fight Mode. | Maak een uitzondering voor `/admin/mcp*` en `/.well-known/*`. |
| Het endpoint geeft de verkeerde respons na installatie van stimmt/craft-mcp | De plugin heeft als handle `mcp`, waardoor `/admin/mcp` bij de plugin kan uitkomen. | Kies voor de server van Craft een pad dat niet met `mcp` begint, zoals de documentatie van de plugin aanraadt. |
| De assistent leest je lokale code in plaats van de site | De client kiest zelf zijn bronnen. | Zeg expliciet: "Gebruik enkel de MCP-tools van mijnsite." |
| Je ziet geen schrijf-tools | Je koos *Read only* bij het verbinden. | Wis de authenticatie in je client en authenticeer opnieuw met *Read and write*. |

De fix voor de Authorization-header is algemene Apache-configuratie, geen instelling van Craft. Voeg bovenaan `web/.htaccess` toe:

```apache
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

Werkt dat niet, zet dan in het rewrite-blok:

```apache
RewriteCond %{HTTP:Authorization} .
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
```

Een 401 op een POST-request zonder geldig token is normaal. Dat betekent net dat het endpoint werkt.

## Is dit iets voor jouw website?

MCP is vooral interessant als je veel content beheert of vaak dezelfde aanpassingen over veel pagina's doet. Voor een kleine site die een paar keer per jaar wijzigt, is de winst beperkt. Wil je weten of het voor jouw Craft-website zinvol is en hoe je het veilig opzet, [neem dan contact op](/contact/).
