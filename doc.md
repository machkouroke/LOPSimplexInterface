### **Comment l'utiliser ?**

**LOPSimplex** utilise le **lopmarkup** pour la résolution des équations simplex. Ce dernier est en réalité basé sur le
language
yaml. Vous pouviez même y importer vos propres fichiers yaml. Pour expliquer sa syntax très simple, nous allons prendre
le **fameux problème de l'agriculteur**
$$
maxf(x_1, x_2) = 1000x_1 + 2000x_2 \space
\begin{cases}
x_1 + x_2 \leq 150 \\
4x_1 + 2x_2 \leq 440 \\
x_1 + 4x_2 \leq 480 \\
x_1 \leq 90 \\
x_1, x_2 \geq 0
\end{cases}
$$

#### **Type Opération**

Pour préciser le type de l'opération, vous utiliser le paramètre `type`. Celui ci peut prendre les valeurs suivantes:

* `max` pour une maximisation
* `min` pour une minimisation

**Exemple de l'agriculteur**

```
type: max
```

#### **Nombre de Variable et de contrainte**

Le paramètre `n` représente le nombre de variables tandis que `p` représente le nombre de contraintes. Veuillez noter
que si vos informations saisit ne correspondent pas à ces valeurs, une erreur vous seras renvoyé. Par exemple si vous
spécifié 4 contraintes et vous en saisisez 5 une erreur seras déclenché

**Exemple de l'agriculteur**

```
n: 2
p: 4
```

#### **Fonction objectif**

La fonction est une fonction linéaire de la forme $f(x)=\sum_{i=1}^n c_i x_i + b$ où $c_i$ est le coefficient de la
variable $x_i$. Vous aviez juste à saisir les coefficient $c_i$ et $b$ si nécessaire ($b\neq0$)

**Exemple de l'agriculteur**

```
function: 1000 2000 
```

#### **Contraintes**

Pour insérer les contraintes d'une manière simplifié vous aviez juste à saisir les coefficients de chaque variable
dans chaque ligne puis le compléter par le coefficient `b` de la ligne correspondante. Pour les variables sans
coefficients, vous deviez indiquer leur coefficient. Toutefois si votre matrices est creuse (Beaucoup de zéros) vous
pouviez utiliser le mode sparse decrit ci dessous

**Exemple de l'agriculteur**

```
constraints: |
  1 1 150
  4 2 440
  1 4 480
  1 0 90
```

#### **Inégalité**
Enfin pour exprimer le système d'inégalité, vous pouviez utiliser la syntaxe suivante:

- `<=` , `>=` `=` pour un système contenant des inégalité homogène(Vous précisez juste le symbole une fois)

**Exemple de l'agriculteur**

```
inequality: <=
```
- Pour un sytème hétérogène, vous pouviez indiquer la position des inégalité différente comme suit:
  `symbol->{position1 position2 ...}`. Modifions le système de l'agriculteur pour qu'il soit hétérogène comme suit:
$$
maxf(x_1, x_2) = 1000x_1 + 2000x_2 \space
\begin{cases}
x_1 + x_2 \leq 150 \\
4x_1 + 2x_2 \geq 440 \\
x_1 + 4x_2 = 480 \\
x_1 \leq 90 \\
x_1, x_2 \geq 0
\end{cases}
$$

On aura:

```
inequality: <=->1,2 >=->2 =->3
```
N'oubliez pas d'omettre les espaces entre les positions