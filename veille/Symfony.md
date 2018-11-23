# Le Framework Symfony

## Informations
- Symfony est le resultat d'une combinaison de plusieurs composant PHP, il a été développé par sensiolab en 2005

### Mon explications de symfony
-Symfony c'est framework permettant au utilisateurs de travailler sur du PHP de manières plus complèxe, avec plus de facilité, que en le faisant directement avec PHP.

#### les fonctionalités de symfony
- Symfony utilise la version 5 de PHP (PHP ≥ 5.2.4 pour Symfony 1.x, PHP ≥ 5.3.3 pour Symfony 2.x et PHP ≥ 5.5.9 pour Symfony 3.x).

Symfony 4.0 requiert la version 7.1.13 ou supérieur afin de fonctionner.

Symfony (1.x) propose entre autres :

une séparation du code en trois couches, selon le modèle MVC, pour une plus grande maintenabilité et évolutivité ;
des performances optimisées et un système de cache afin d'assurer des temps de réponse optimaux ;
une gestion des URL parlante, permettant à une page d'avoir une URL distincte de sa position dans l'arborescence ;
un système de configuration en cascade utilisant pleinement le langage YAML ;
un générateur de back-office et un lanceur de module (scaffolding) ;
l'internationalisation native ;
le support d'AJAX ;
une architecture extensible permettant créations et utilisations de plugins.
Symfony fournit une interface en ligne de commande pour améliorer la productivité en créant un code de base modifiable à volonté. 

##### Exemple de code en Symfony
-<?php
namespace App\Controller;
 
use ...
 
class TestController extends Controller
{
    /**
    * @Route("/test", name="test")
    */
    public function index()
    {
        return new Response('Welcome to your new controller!')
    }