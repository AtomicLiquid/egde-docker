![Egde Logo](https://egdeconsulting.no/wp-content/uploads/2017/01/egde-logo-negativ.png)
# Egde Docker Workshop
Velkommen til Egdes Docker Workshop. Dersom du trenger hjelp er det bare å spørre!

## Først og fremst
Dette prosjektet baserer seg på at man har:
1. Installert Docker (https://docker.com/) NB! Dersom du ikke har professional/education versjon av Windows, må du laste ned Docker Toolbox og ikke Docker Desktop
2. Installert NodeJS (https://nodejs.org/)
3. Installert Discord (https://discordapp.com/)
4. Opprettet bruker på https://discordapp.com og https://hub.docker.com/

##### Opprette en discord bot
Før vi kan begynne å programmere en discord bot er vi nødt til å opprette en discord applikasjon.

Opprettingen av en discord applikasjon kan gjøres [her](https://discordapp.com/developers/applications/)

Når du har opprettet applikasjonen, gjør følgende steg:
1. Naviger til "Bot"
2. Trykk "Add bot"
3. Gi boten et navn du ønsker (evt. gi også permissions)

Token som nå blir opprettet vil du trenge for å fortelle hvilken bot som tilhører deg.

#####  Opprette Docker Hub Repository
For å kunne hente ned Docker Imaget vårt uansett hvor vi er, trenger vi et repo og pushe det til.
Dette gjøres gjennom [Docker Hub](https://hub.docker.com/), og derfor må vi opprette vårt eget repo for applikasjonen vår.
1. Naviger til hub.docker.com
2. Klikk på fanen "Repositories"
3. Klikk på "Create repository"
4. Navngi applikasjonen din og velg om du ønsker at Docker repoet skal være offentlig eller privat.

## Du er nå klar til å begynne!
Så, hvor starter du?
For å slippe å finne opp hjulet på nytt, er det anbefalt og basere seg på eksempelkoden som du kan finne [ovenfor](index.js).
Klon repositoryet og kjør "npm install". Dette vil installere discord.js biblioteket, som gjør at vi kan kjøre en discord applikasjon.

Du kan godt prøve å kjøre applikasjonen, legg inn token til din bot og [legg til boten i din discord server](https://discordpy.readthedocs.io/en/latest/discord.html#inviting-your-bot). Deretter skriv `node index.js`i en terminal for å starte boten.
Du kan sjekke om boten kjører ved å skrive !ping i en kanal på din server.

## Docker
Når applikasjonen din er klar, skal vi "Dockerize" den, slik at vi kan kjøre den hvor som helst gjennom Docker.
Det første du må gjøre er å lage en [Dockerfile](Dockerfile) som forteller hvor den finner applikasjonen og hvordan den skal kjøre den.
Deretter må vi bygge docker imaget og pushe det til docker repoet vårt. Dette gjøres slik:
```
$ docker build . -t <docker brukernavn>/<docker repo navn>
$ docker push <docker brukernavn>/<docker repo navn>
```

NB! Dersom du har ett private repository krever dette at du logger deg inn. Dette kan gjøres vha. `docker login -u <brukernavn> -p <passord>`

For å kjøre applikasjonen er alt vi trenger å gjøre å skrive i en terminal (krever at Docker er installert/tilgjengelig):
```
$ docker run -d <docker brukernavn>/<docker repo navn>
``` 
