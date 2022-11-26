# KainGuides
> Software um Guides und Führungen (Touren) am TdoT 2023 der HTL Kaindorf zu verwalten!
## ERD / RM
![ERD](/ERD_RM.png)

## Login (JWT)

+ standard JWT login (nur für Admins)

## Guide List

+ Liste aller Guides
+ Filter und Sortierung (nach allen Attributen laut ERD)
+ Link zu User-Profile

## User Profile

+ alle Daten (Vor- und Nachname, Klasse, Abteilung ...)
+ Führungsverlauf (History aller Führungen)
+ Todo Tab
    + Liste aller Todos mit Status (offen und erledigt)
+ Möglichkeit Todos für User anzulegen

## Tour Dashboard

+ Statistik Component
    + Aktuell stattfindende Führungen je Abteilung und global
    + bereits stattgefundene Führungen je Abteilung und global
    + Durchschnittliche Führungsdauer je Abteilung und global
+ Liste aller stattfindenden Führungen (laufende Zeit und andere Attribute)
+ Möglichkeit jede Tour manuell zu ändern (abbrechen, Zeiten anpassen, Guide ändern, Daten anpassen)
+ Möglichkeit Tour manuell anzulegen (Abteilung der Tour ist standardmäßig die des Guides, kann aber als "Aushilfe-Tour" geändert werden. D.h. dass die Abteilung manuell geändert werden kann, um alle Daten zu erheben)
    + ist der Fall, wenn zu wenig Guides einer Abteilung bereit sind und deshalb Guides anderer Abteilungen eine Tour durchführen müssen

## Notes

+ Möglichkeit, Notizen (kurzer Text) zu einer Tour oder einem Guide hinzufügen
    + können immer aufpoppen, wenn Nutzername gehovert wird oder extra icon in jeder Liste falls Notes vorhanend sind

## Zeitplan

+ Liste mit den 2 TdoT Tagen und allen Guides
    + Zeigt, wann welcher Guide voraussichtlich anwesend sein wird (soll/ist -> also 2 Felder/Vermerke je Tag)

## Report

+ Möglichkeit, einen Report (Auswertung aller für die Direktion relevanter Daten) "live" zu Drucken (PDF-Rendern)