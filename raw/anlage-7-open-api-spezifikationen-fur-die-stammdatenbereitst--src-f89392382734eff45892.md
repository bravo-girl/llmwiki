# Anlage 7: Open-Api Spezifikationen für die Stammdatenbereitstellung

- Quellenart: YAML
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13508616/d67ae567ae37eb26537677de0c3bff7a/Anlage-7-Open-Api-Spezifikationen-fuer-die-Stammdatenbereitstellung-data.yaml`
- Original-URL: [YAML beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13508616/d67ae567ae37eb26537677de0c3bff7a/Anlage-7-Open-Api-Spezifikationen-fuer-die-Stammdatenbereitstellung-data.yaml)
- Quellen-Schlüssel: `src-f89392382734eff45892`
- Abrufdatum: 2026-06-28
- Original: [[anlage-7-open-api-spezifikationen-fur-die-stammdatenbereitstellung--src-f89392382734eff45892.yaml]]

> Quellentreue Rohdaten-Transkription der verlinkten YAML-Datei. Personenbezogene Kontaktwerte wurden entfernt; das unveränderte lokale Original bleibt maßgeblich.

openapi: "3.0.3"
info:
  contact:
    email: "[Kontaktangabe entfernt]"
    name: "API Support"
  description: "OpenAPI-Spezifikation für die Stammdaten Bereitstellung für die EVU,\n\
    kompatibel mit EVU-SST Version 4.6.2\n"
  title: "Stammdaten - API"
  version: "0.15.26-next.20250912105810.cc61b76"
servers:
- description: "local url"
  url: "http://localhost:8080/"
tags:
- description: "Stammdaten API für Stammdaten Info"
  name: "stammdaten"
paths:
  /stammdaten-bereitstellung/v1/ordnungsrahmenstaende:
    get:
      description: "liefert alle verfügbaren Ordnungsrahmenstände an die EVUs"
      operationId: "getOrdnungsrahmenstaende"
      responses:
        "200":
          content:
            application/json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/OrdnungsrahmenstaendeResponse"
          description: "OK"
        "401":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "nicht autorisiert"
        "403":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "Verboten"
        "404":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "Stammdaten konnten nicht gefunden werden"
      summary: "liefert alle Ordnungsrahmenstände"
      tags:
      - "stammdaten"
  /stammdaten-bereitstellung/v1/stammdaten:
    get:
      description: "liefert alle vereinbarten Stammdaten an die EVUs"
      operationId: "loadStammDaten"
      parameters:
      - description: "Name eines Ordnungsrahmenstandes aus vorangegangener Anfrage\
          \ ordnungsrahmenstaende"
        explode: true
        in: "query"
        name: "ordnungsrahmenstandName"
        required: true
        schema:
          type: "string"
        style: "form"
      responses:
        "200":
          content:
            application/json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/StammdatenResponse"
          description: "OK"
        "400":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "ungültige Anfrage"
        "401":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "nicht autorisiert"
        "403":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "Verboten"
        "404":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "Stammdaten konnten nicht gefunden werden"
        "405":
          content:
            application/problem+json; charset=UTF-8:
              schema:
                $ref: "#/components/schemas/ApiErrorResponse"
          description: "Methode nicht erlaubt"
      summary: "liefert alle Stammdaten"
      tags:
      - "stammdaten"
components:
  schemas:
    OrdnungsrahmenstaendeResponse:
      example:
        ordnungsrahmenstaende:
        - name: "Jahresfahrplan 2022.2"
          gueltigAb: "2000-01-23"
          gueltigBis: "2000-01-23"
          status: "redaktionsgeschlossen"
        - name: "Jahresfahrplan 2022.2"
          gueltigAb: "2000-01-23"
          gueltigBis: "2000-01-23"
          status: "redaktionsgeschlossen"
      properties:
        ordnungsrahmenstaende:
          items:
            $ref: "#/components/schemas/Ordnungsrahmenstand"
          type: "array"
      required:
      - "ordnungsrahmenstaende"
      type: "object"
    Ordnungsrahmenstand:
      example:
        name: "Jahresfahrplan 2022.2"
        gueltigAb: "2000-01-23"
        gueltigBis: "2000-01-23"
        status: "redaktionsgeschlossen"
      properties:
        name:
          description: "Der Name des Ordnungsrahmenstandes, ergänzt um die laufende\
            \ Nummer. Die laufende Nummer wird der Jahreszahl mit Punkt angefügt."
          example: "Jahresfahrplan 2022.2"
          maxLength: 255
          type: "string"
        gueltigAb:
          description: "Datum des Beginns der fachlichen Gültigkeit"
          format: "date"
          type: "string"
        gueltigBis:
          description: "Datum des Endes der fachlichen Gültigkeit"
          format: "date"
          type: "string"
        status:
          enum:
          - "arbeitsgeschlossen"
          - "redaktionsgeschlossen"
          example: "redaktionsgeschlossen"
          type: "string"
      required:
      - "gueltigAb"
      - "gueltigBis"
      - "name"
      - "status"
      type: "object"
    ApiErrorResponse:
      properties:
        errorCode:
          description: "Angabe einer Fehlernummer"
          example: "4711"
          type: "string"
        title:
          description: "Allgemeine Bezeichnung des Fehlertyps, diese ist unabhängig\
            \ von der konkreten Fehlerinstanz\n"
          example: "Validation failed"
          type: "string"
        detail:
          description: "Detailinformation zur konkreten Fehlersituation"
          example: "Invalid message request"
          type: "string"
        status:
          description: "http Status des Service, in dem der Fehler entstanden ist.\
            \ Dieser kann sich vom Status-Code der http-Response unterscheiden, falls\
            \ die Antwort über mehrere Zwischenstationen übertragen wurde\n"
          example: 400
          type: "integer"
        instance:
          description: "ID zur Identifikation dieser konkreten Fehlerinstanz, z.B.\
            \ eine UUID, die man in Log-Meldungen finden kann\n"
          example: "urn:uuid:4973851d-2a1e-480d-9c4f-19488e7e338d"
          type: "string"
        errors:
          description: "Liste von Fehlermeldungen, wenn mehrere Fehler diese Fehlernachricht\
            \ ausgelöst haben. In diesem Fall sollte auf der oberen Ebene ein generischer\
            \ Fehlertyp gewählt werden und auf der Detailebene der spezifische Fehlertyp\
            \ für das betroffene Feld/Element.\n"
          items:
            $ref: "#/components/schemas/ApiError"
          type: "array"
          example: null
      required:
      - "detail"
      - "title"
      type: "object"
    ApiError:
      properties:
        title:
          description: "Allgemeine Bezeichnung des Fehlertyps, diese ist unabhängig\
            \ von der konkreten Fehlerinstanz\n"
          example: "Mandatory attribute missing"
          type: "string"
        field:
          description: "Name des betroffenen Feldes/Elementes der Anfrage"
          type: "string"
        detail:
          description: "Detailinformation zur konkreten Fehlersituation bezogen auf\
            \ das Feld/Element\n"
          type: "string"
      required:
      - "detail"
      - "field"
      - "title"
      type: "object"
    StammdatenResponse:
      example:
        Flexibilitaeten:
        - flexibilitaet: "ZF 120"
          beschreibung: "Zeitliche Flexibilität"
        - flexibilitaet: "ZF 120"
          beschreibung: "Zeitliche Flexibilität"
        Betriebsstellen:
        - companyCode: "code"
          nameCompany: "nameCompany"
          istMutterBahnhof: true
          mbfCountryCodeISO: "DE"
          locationName: "teststring"
          nrRb: 0
          neNr: "n11"
          typ: "typ"
          netzgrenzeNameCompany: "netzgrenzeNameCompany"
          uic: "uic"
          fplgrenzeNameCompany: "fplgrenzeNameCompany"
          name16: "name16"
          typeCode: "T1"
          istKonstruktionsrelevant: true
          fplgrenzeCompanyCode: "fpl1"
          uicNr: "uic1"
          mbfLocationPrimaryCode: "mbf11"
          countryCodeISO: "DE"
          locationNameASCII: "teststring"
          locationPrimaryCode: "15684"
          ne: "ne"
          ril100: "ril1"
          netzgrenzeCompanyCode: "ne11"
        - companyCode: "code"
          nameCompany: "nameCompany"
          istMutterBahnhof: true
          mbfCountryCodeISO: "DE"
          locationName: "teststring"
          nrRb: 0
          neNr: "n11"
          typ: "typ"
          netzgrenzeNameCompany: "netzgrenzeNameCompany"
          uic: "uic"
          fplgrenzeNameCompany: "fplgrenzeNameCompany"
          name16: "name16"
          typeCode: "T1"
          istKonstruktionsrelevant: true
          fplgrenzeCompanyCode: "fpl1"
          uicNr: "uic1"
          mbfLocationPrimaryCode: "mbf11"
          countryCodeISO: "DE"
          locationNameASCII: "teststring"
          locationPrimaryCode: "15684"
          ne: "ne"
          ril100: "ril1"
          netzgrenzeCompanyCode: "ne11"
        VerkehrsartKundeZusaetze:
        - verkehrsartKundeZusatz: "verkehrsartKundeZusatz"
        - verkehrsartKundeZusatz: "verkehrsartKundeZusatz"
        StammdatenHeader:
          stammdatenArt: "JF"
          fahrplanJahr: "2021"
          endeFahrplanJahr: "2000-01-23"
          beginnFahplanJahr: "2000-01-23"
          gueltigAb: "2000-01-23"
          messageID: 0
          gueltigBis: "2000-01-23"
          beschreibung: "beschreibung"
        Triebfahrzeuge:
        - tfzBaureihe: "1234"
          tfzBaureihenVarianteBeschreibung: "DE TRAXX F140 Pm=2,2MW"
          typeCode1: "9"
          typeCode2: "1"
          tfzBaureihenVariante: "111"
          laenderName: "DE"
          laenderCode: "80"
        - tfzBaureihe: "1234"
          tfzBaureihenVarianteBeschreibung: "DE TRAXX F140 Pm=2,2MW"
          typeCode1: "9"
          typeCode2: "1"
          tfzBaureihenVariante: "111"
          laenderName: "DE"
          laenderCode: "80"
        Zuggattungen:
        - betrieblichePrio: "sehrhohePrio"
          zggAbkuerz: "IC"
          verkehrsartKunde: "SPFV"
          tfzOderLeerfahrt: "LeerRz"
          zggHauptNr: "12"
          zggBezeichnung: "zggBezeichnung"
          zggUnterNr: 5
          beschreibung: "beschreibung"
        - betrieblichePrio: "sehrhohePrio"
          zggAbkuerz: "IC"
          verkehrsartKunde: "SPFV"
          tfzOderLeerfahrt: "LeerRz"
          zggHauptNr: "12"
          zggBezeichnung: "zggBezeichnung"
          zggUnterNr: 5
          beschreibung: "beschreibung"
        Streckenklassen:
        - streckenklasse: "skl1"
        - streckenklasse: "skl1"
        Strecken:
        - streckenNummer: "5510"
          ZugeordneteBetriebsstelle:
          - anzahlGleise: "0"
            countryCodeISO: "DE"
            locationPrimaryCode: "18999"
            lageKm: 64.874
            wirkung: 9
            bemerkung: "nicht bestellbar"
            typ: "Bf"
            ril100: "MRO"
            zustandStrecke: "unterbrochen"
            name16: "Rosenheim"
          - anzahlGleise: "0"
            countryCodeISO: "DE"
            locationPrimaryCode: "18999"
            lageKm: 64.874
            wirkung: 9
            bemerkung: "nicht bestellbar"
            typ: "Bf"
            ril100: "MRO"
            zustandStrecke: "unterbrochen"
            name16: "Rosenheim"
        - streckenNummer: "5510"
          ZugeordneteBetriebsstelle:
          - anzahlGleise: "0"
            countryCodeISO: "DE"
            locationPrimaryCode: "18999"
            lageKm: 64.874
            wirkung: 9
            bemerkung: "nicht bestellbar"
            typ: "Bf"
            ril100: "MRO"
            zustandStrecke: "unterbrochen"
            name16: "Rosenheim"
          - anzahlGleise: "0"
            countryCodeISO: "DE"
            locationPrimaryCode: "18999"
            lageKm: 64.874
            wirkung: 9
            bemerkung: "nicht bestellbar"
            typ: "Bf"
            ril100: "MRO"
            zustandStrecke: "unterbrochen"
            name16: "Rosenheim"
      properties:
        StammdatenHeader:
          $ref: "#/components/schemas/StammdatenHeader"
        Betriebsstellen:
          items:
            $ref: "#/components/schemas/Betriebsstelle"
          type: "array"
        Strecken:
          items:
            $ref: "#/components/schemas/Strecke"
          type: "array"
        Triebfahrzeuge:
          items:
            $ref: "#/components/schemas/Triebfahrzeug"
          type: "array"
        Zuggattungen:
          items:
            $ref: "#/components/schemas/Zuggattung"
          type: "array"
        Streckenklassen:
          items:
            $ref: "#/components/schemas/Streckenklasse"
          type: "array"
        VerkehrsartKundeZusaetze:
          items:
            $ref: "#/components/schemas/VerkehrsartKundeZusatz"
          type: "array"
        Flexibilitaeten:
          items:
            $ref: "#/components/schemas/Flexibilitaet"
          type: "array"
      required:
      - "Betriebsstellen"
      - "Flexibilitaeten"
      - "StammdatenHeader"
      - "Strecken"
      - "Streckenklassen"
      - "Triebfahrzeuge"
      - "VerkehrsartKundeZusaetze"
      - "Zuggattungen"
      type: "object"
    StammdatenHeader:
      example:
        stammdatenArt: "JF"
        fahrplanJahr: "2021"
        endeFahrplanJahr: "2000-01-23"
        beginnFahplanJahr: "2000-01-23"
        gueltigAb: "2000-01-23"
        messageID: 0
        gueltigBis: "2000-01-23"
        beschreibung: "beschreibung"
      properties:
        messageID:
          type: "integer"
        stammdatenArt:
          enum:
          - "JF"
          - "ST"
          - "SO"
          type: "string"
        fahrplanJahr:
          example: "2021"
          pattern: "^\\d{4}$"
          type: "string"
        beginnFahplanJahr:
          format: "date"
          type: "string"
        endeFahrplanJahr:
          format: "date"
          type: "string"
        gueltigAb:
          format: "date"
          type: "string"
        gueltigBis:
          format: "date"
          type: "string"
        beschreibung:
          maxLength: 255
          type: "string"
      required:
      - "beginnFahplanJahr"
      - "beschreibung"
      - "endeFahrplanJahr"
      - "fahrplanJahr"
      - "gueltigAb"
      - "gueltigBis"
      - "messageID"
      - "stammdatenArt"
      type: "object"
    Betriebsstellen:
      items:
        $ref: "#/components/schemas/Betriebsstelle"
      type: "array"
    Betriebsstelle:
      example:
        companyCode: "code"
        nameCompany: "nameCompany"
        istMutterBahnhof: true
        mbfCountryCodeISO: "DE"
        locationName: "teststring"
        nrRb: 0
        neNr: "n11"
        typ: "typ"
        netzgrenzeNameCompany: "netzgrenzeNameCompany"
        uic: "uic"
        fplgrenzeNameCompany: "fplgrenzeNameCompany"
        name16: "name16"
        typeCode: "T1"
        istKonstruktionsrelevant: true
        fplgrenzeCompanyCode: "fpl1"
        uicNr: "uic1"
        mbfLocationPrimaryCode: "mbf11"
        countryCodeISO: "DE"
        locationNameASCII: "teststring"
        locationPrimaryCode: "15684"
        ne: "ne"
        ril100: "ril1"
        netzgrenzeCompanyCode: "ne11"
      properties:
        countryCodeISO:
          example: "DE"
          maxLength: 2
          type: "string"
        locationName:
          example: "teststring"
          maxLength: 255
          type: "string"
        locationNameASCII:
          example: "teststring"
          maxLength: 255
          type: "string"
        locationPrimaryCode:
          example: "15684"
          maxLength: 5
          type: "string"
        companyCode:
          example: "code"
          maxLength: 4
          type: "string"
        nameCompany:
          maxLength: 40
          type: "string"
        ril100:
          example: "ril1"
          maxLength: 5
          type: "string"
        name16:
          maxLength: 16
          type: "string"
        typeCode:
          example: "T1"
          maxLength: 2
          type: "string"
        typ:
          maxLength: 20
          type: "string"
        nrRb:
          maximum: 1
          type: "integer"
        uicNr:
          example: "uic1"
          maxLength: 4
          type: "string"
        uic:
          maxLength: 40
          type: "string"
        neNr:
          example: "n11"
          maxLength: 3
          type: "string"
        ne:
          maxLength: 40
          type: "string"
        istKonstruktionsrelevant:
          type: "boolean"
        istMutterBahnhof:
          type: "boolean"
        mbfCountryCodeISO:
          example: "DE"
          maxLength: 2
          type: "string"
        mbfLocationPrimaryCode:
          example: "mbf11"
          maxLength: 5
          type: "string"
        netzgrenzeCompanyCode:
          example: "ne11"
          maxLength: 4
          type: "string"
        netzgrenzeNameCompany:
          maxLength: 40
          type: "string"
        fplgrenzeCompanyCode:
          example: "fpl1"
          maxLength: 4
          type: "string"
        fplgrenzeNameCompany:
          maxLength: 40
          type: "string"
      required:
      - "companyCode"
      - "countryCodeISO"
      - "istKonstruktionsrelevant"
      - "istMutterBahnhof"
      - "locationName"
      - "locationNameASCII"
      - "locationPrimaryCode"
      - "name16"
      - "nameCompany"
      - "nrRb"
      - "typeCode"
      type: "object"
    Strecken:
      items:
        $ref: "#/components/schemas/Strecke"
      type: "array"
    Strecke:
      example:
        streckenNummer: "5510"
        ZugeordneteBetriebsstelle:
        - anzahlGleise: "0"
          countryCodeISO: "DE"
          locationPrimaryCode: "18999"
          lageKm: 64.874
          wirkung: 9
          bemerkung: "nicht bestellbar"
          typ: "Bf"
          ril100: "MRO"
          zustandStrecke: "unterbrochen"
          name16: "Rosenheim"
        - anzahlGleise: "0"
          countryCodeISO: "DE"
          locationPrimaryCode: "18999"
          lageKm: 64.874
          wirkung: 9
          bemerkung: "nicht bestellbar"
          typ: "Bf"
          ril100: "MRO"
          zustandStrecke: "unterbrochen"
          name16: "Rosenheim"
      properties:
        streckenNummer:
          example: "5510"
          maxLength: 4
          type: "string"
        ZugeordneteBetriebsstelle:
          items:
            $ref: "#/components/schemas/ZugeordneteBetriebsstelle"
          minItems: 2
          type: "array"
      required:
      - "ZugeordneteBetriebsstelle"
      - "streckenNummer"
      type: "object"
    ZugeordneteBetriebsstelle:
      example:
        anzahlGleise: "0"
        countryCodeISO: "DE"
        locationPrimaryCode: "18999"
        lageKm: 64.874
        wirkung: 9
        bemerkung: "nicht bestellbar"
        typ: "Bf"
        ril100: "MRO"
        zustandStrecke: "unterbrochen"
        name16: "Rosenheim"
      properties:
        countryCodeISO:
          example: "DE"
          maxLength: 2
          type: "string"
        locationPrimaryCode:
          example: "18999"
          maxLength: 5
          type: "string"
        ril100:
          example: "MRO"
          maxLength: 5
          type: "string"
        name16:
          example: "Rosenheim"
          maxLength: 16
          type: "string"
        typ:
          example: "Bf"
          maxLength: 20
          type: "string"
        lageKm:
          example: 64.874
          format: "float"
          type: "number"
        anzahlGleise:
          enum:
          - "0"
          - "1"
          - "2"
          type: "string"
        wirkung:
          example: 9
          maximum: 18
          minimum: 1
          type: "integer"
        zustandStrecke:
          example: "unterbrochen"
          type: "string"
        bemerkung:
          example: "nicht bestellbar"
          maxLength: 255
          type: "string"
      required:
      - "countryCodeISO"
      - "lageKm"
      - "locationPrimaryCode"
      - "name16"
      - "ril100"
      - "typ"
      type: "object"
    Triebfahrzeuge:
      items:
        $ref: "#/components/schemas/Triebfahrzeug"
      type: "array"
    Triebfahrzeug:
      example:
        tfzBaureihe: "1234"
        tfzBaureihenVarianteBeschreibung: "DE TRAXX F140 Pm=2,2MW"
        typeCode1: "9"
        typeCode2: "1"
        tfzBaureihenVariante: "111"
        laenderName: "DE"
        laenderCode: "80"
      properties:
        tfzBaureihe:
          example: "1234"
          maxLength: 4
          pattern: "^\\d{4}$"
          type: "string"
        tfzBaureihenVariante:
          example: "111"
          pattern: "^\\d{3}$"
          type: "string"
        tfzBaureihenVarianteBeschreibung:
          description: "Verbale Beschreibung der Triebfahrzeug-Baureihen-variante"
          example: "DE TRAXX F140 Pm=2,2MW"
          maxLength: 100
          type: "string"
        laenderCode:
          example: "80"
          maxLength: 2
          type: "string"
        laenderName:
          example: "DE"
          maxLength: 16
          type: "string"
        typeCode1:
          enum:
          - "9"
          example: "9"
          type: "string"
        typeCode2:
          example: "1"
          pattern: "^\\d{1}$"
          type: "string"
      required:
      - "laenderCode"
      - "laenderName"
      - "tfzBaureihe"
      - "tfzBaureihenVariante"
      - "tfzBaureihenVarianteBeschreibung"
      - "typeCode1"
      - "typeCode2"
      type: "object"
    Zuggattungen:
      items:
        $ref: "#/components/schemas/Zuggattung"
      type: "array"
    Zuggattung:
      example:
        betrieblichePrio: "sehrhohePrio"
        zggAbkuerz: "IC"
        verkehrsartKunde: "SPFV"
        tfzOderLeerfahrt: "LeerRz"
        zggHauptNr: "12"
        zggBezeichnung: "zggBezeichnung"
        zggUnterNr: 5
        beschreibung: "beschreibung"
      properties:
        zggHauptNr:
          example: "12"
          pattern: "^\\d{2}$"
          type: "string"
        zggUnterNr:
          example: 5
          maximum: 9
          minimum: 0
          type: "integer"
        zggAbkuerz:
          example: "IC"
          maxLength: 10
          type: "string"
        zggBezeichnung:
          maxLength: 50
          type: "string"
        beschreibung:
          maxLength: 255
          type: "string"
        verkehrsartKunde:
          enum:
          - "SPFV"
          - "SPNV"
          - "SGV"
          example: "SPFV"
          maxLength: 4
          type: "string"
        betrieblichePrio:
          enum:
          - "sehrhohePrio"
          - "hohePrio"
          - ""
          example: "sehrhohePrio"
          maxLength: 15
          type: "string"
        tfzOderLeerfahrt:
          enum:
          - "LeerRz"
          - "Tfzf"
          - "LOKZUG"
          - ""
          example: "LeerRz"
          maxLength: 15
          type: "string"
      required:
      - "beschreibung"
      - "betrieblichePrio"
      - "tfzOderLeerfahrt"
      - "verkehrsartKunde"
      - "zggAbkuerz"
      - "zggBezeichnung"
      - "zggHauptNr"
      - "zggUnterNr"
      type: "object"
    Streckenklassen:
      items:
        $ref: "#/components/schemas/Streckenklasse"
      type: "array"
    Streckenklasse:
      example:
        streckenklasse: "skl1"
      properties:
        streckenklasse:
          example: "skl1"
          maxLength: 3
          type: "string"
      required:
      - "streckenklasse"
      type: "object"
    VerkehrsartKundeZusaetze:
      items:
        $ref: "#/components/schemas/VerkehrsartKundeZusatz"
      type: "array"
    VerkehrsartKundeZusatz:
      example:
        verkehrsartKundeZusatz: "verkehrsartKundeZusatz"
      properties:
        verkehrsartKundeZusatz:
          maxLength: 40
          type: "string"
      required:
      - "verkehrsartKundeZusatz"
      type: "object"
    Flexibilitaeten:
      items:
        $ref: "#/components/schemas/Flexibilitaet"
      type: "array"
    Flexibilitaet:
      example:
        flexibilitaet: "ZF 120"
        beschreibung: "Zeitliche Flexibilität"
      properties:
        flexibilitaet:
          example: "ZF 120"
          maxLength: 6
          type: "string"
        beschreibung:
          example: "Zeitliche Flexibilität"
          maxLength: 255
          type: "string"
      required:
      - "beschreibung"
      - "flexibilitaet"
      type: "object"
