---
title: "Jamstack moderni web-kehitys arkkitehtuuri"
slug: jamstack
description: "Frontin devaaminen on taas hauskaa kun ei tarvitse käyttää aikaa palvelinympäristöjen konfigurointiin."
date: 2020-02-20
author: Andreas Koutsoukos
subject: "Arkkitehtuuri"
audio: "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2020-2-6/55024076-44100-2-6703dc64e9c5f.m4a"
video: "UddmiME11DQ"
code: ""
coverimage: "https://images.unsplash.com/photo-1586809774586-7be6449e517a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
seoimage: "https://s3.eu-north-1.amazonaws.com/apiclients-koodi-info/images/hqdefault.jpg?x-craft-preview=FcQo7NbPK3&token=FpFw9LwvrFm8dHIrvUo6JAd_SAOeR6tb"
links:
  - Demo1
  - Demo2
keywords:
---

## Mikä on Jamstack?

( Audiossa muutama virhe, markdown ei markup! )

Kun kuulin ensimmäistä kertaa Jamstack arkkitehtuurista mietin, että miksi en ole käyttänyt arkkitehtuuria aikaisemmin. Nuo vuodet freelancerina ja mainostoimisto koodarina kun kehitettiin WordPress, Drupal, Joomla ja muita PHP sisällönhallintajärjestelmiä tuntuu nyt arvottomilta. Verkkosivujen kehittäminen on taas yhtä juhlaa!

Jamstack on arkkitehtuuri joka koostuu kolmesta teknologia osaalueesta. Javascript, API sekä Markdown.
[JAMstack Fundamentals: What, What and How? With Phil Hawksworth](https://vimeo.com/340526374#at=1110)

## Hyödyt

**Nopea**
Valmiiksi koostetut staattiset sivut. Kuvat muut resurssit ( ääni, ikonit ja muut mediat ) voidaan jakaa sisällönjakeluverkkoon ( CDN )

**Hakukone ystävällinen**
Staattiset sivut sekä selkeä URL arkkitehtuuri mahdollistaa sen, että hakukone indeksoi sivun nopeammin ja näin ollen sivusto indeksoituu hakukoneessa paremmin.
Nopeammat sivut tarkoittavat enemmän pisteitä Googlen hakukoneessa.

**Turvallinen**
Ei tietokantaa ei murheita. Hyökkäys pinta-ala on vähemmän kuin perinteisellä tietokantapohjaisella arkkitehtuurilla.

**Halpa**
Tiedostojen ylläpito on halpaa tai jopa ilmaista.

**Skaalautuvuus**
Liikenteenmäärän kasvusta johtuvaa kuorimusta voidaan optimoida sisällönjakeluverkkoon avulla.

[Jamstack WTF](https://jamstack.wtf/)

## Historiaa

Jamstack arkkitehtuurin takana on Netlify perustaja [Mathias Biilmann](http://mathias-biilmann.net/about).
Pieni kehittäjäryhmä antoi vuonna 2015 termin Jamstack jota alettiin pikkuhiljaa käyttämään muiden kehittäjien sekä kehittäjäyhteisön keskuudessa.

[New to JAMstack? Everything You Need to Know to Get Started](https://snipcart.com/blog/jamstack)

## Jamstack vs. perinteinen web-kehitys arkkitehtuuri

Perinteisessä arkkitehtuurissa kaikki osa-alueet ovat omassa hillopurkissa.
Näin ollen ympäristöt että, sisällöt ( data ) pitää olla synkronoitu jotta koonti onnistuu täysin kuin se on suunniteltu kehitysvaiheessa.

Jamstack arkkitehtuurissa osa-alueet ovat jaettu omiin hillopurkkeihin joka mahdollistaa jatkuvan integraation helpommin kuin perinteisessä monoliittisessa web-kehitys arkkitehtuurissa. Ohjelmointirajapintojen ansiosta dataa ei tarvitse synkronoida kehitysympäristön ja tuotantoympäristön välillä vaan data on aina synkronoitu.

Artikkelissa mainittu monta kertaa staattinen sivusto terminä joka tavallaan on totta, mutta Jamstack ei ole oikeastaan staattinen. Jamstack arkkitehtuuri voidaan kutsua hyperdynaamiseksi.

[JAMstack Tutorial - Full site using Netlify & Hugo](https://youtu.be/NSts93C9UeE?t=360)

## Käyttö ja soveltuvuus

Jamstack soveltuu hyvin moneen eri käyttötapaan. Sillä ei kuitenkaan kannata rakentaa sivustoa jonka sisältö muuttuvat kun selaaja ( client ) tekee muutos pyynnön, kuten vaikkapa Twitter.

**Jamstack soveltuu erityisesti seuraaviin käyttötapauksiin**

- Perinteiset kotisivut
- Blogit
- Verkkokaupat
- Verkkosanomalehdet
- Simppeli web-applikaatio

[Hyper Web Development and the Rise of the JAMstack](https://www.software.com/src/hyper-web-development-and-the-rise-of-the-jamstack)

## Työkalut sekä koonti prosessi

Jamstack arkkitehtuuri kehitysympäristö voidaan aloittaa joko itse rakentamalla tai valita ns: staattisten sivujen generaattorin avulla. Nopein ja helpoin tapa on valita jälkimmäinen SSG (static site generator) tapa.

### Frontti

Frontti vastaa Jamstack arkkitehtuurin J osuudesta ja voi olla mikä tahansa teknologia jolla kyvykkyys reaktiiviseen web-kehitykseen.

- [Gridsome](https://gridsome.org/) ( Vue.js pohjainen )
- [Gatsbyjs](https://www.gatsbyjs.org/) ( React.js pohjainen )
- [Hugo](https://gohugo.io/) ( Go pohjainen )
- [11ty](https://www.11ty.dev/) ( JS pohjainen )
- [StaticGen](https://www.staticgen.com/) ( Listaus sivustojen generaattoreista )

### Tietolähde sekä rajapinnat

Tietolähde vastaan Jamstack arkkitehtuurin A osuudesta ja voi olla mikä tahansa API tai sisällön julkaisujärjestelmä.

- [Craft CMS](https://craftcms.com/)
- [JSON](https://fi.wikipedia.org/wiki/JSON)
- [Firebase](https://firebase.google.com/?hl=fi)
- [Cloudinary](https://cloudinary.com/)
- [Typeform](https://www.typeform.com/)

### Sisältö

Sisältö vastaa Jamstack arkkitehtuurin M osuudesta. Markdown muodon avulla voidaan generoida sivuja sekä sisältöjä.

[Markdown guide](https://www.markdownguide.org/)

### Ympäristöt

Jamstack arkkitehtuurin pohjainen koonti ei vaadi erityistä ympäristöä toimiakseen vaan se voi olla mikä tahansa sisällönjakeluverkko ( CDN ).
Kehitysympäristö voi olla täysin erilainen kuin julkaisuympäristö ja tästä syystä Jamstack arkkitehtuuri on kehittäjä ystävällinen.

- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### Koonti prosessi

Työkulku prosessi on hyvin suoraviivainen Jamstack arkkitehtuurissa. Kehitystä tehdään paikallisesti ( omalta koneelta ) koodit sijaitsevat
Versiohallinnassa josta koonti prosessi sisällönjakeluverkko voidaan automatisoida jatkuvan integraation avulla. JAM!
