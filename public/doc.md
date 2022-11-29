### Comment l'utiliser ?

- Préciser le type d'opération dans le premier paramètre `type` (min ou max)
- Le nombre `n` réprésente le nombre de variable tandis que `p` réprésente le nombre de contraintes
- La fonction est une fonction linéaire de la forme $f(x)=\sum_{i=1}^n c_i x_i + b$ où $c_i$ est le coefficient 
de la variable $x_i$. Vous pouviez omettre le coefficient $b$
- Pour insérer les contraintes d'une manière simplifié vous aviez juste à saisir les coefficients de chaque variable 
dans chaque ligne puis le compléter par le coefficient `b` de la ligne correspondante. Pour les variables sans 
coefficients, vous deviez indiquer leur coefficient
- Enfin pour exprimer le système d'inégalité, vous pouviez utiliser le language lop simplifié suivant:
  - `<=` , `>=` `=` pour un système contenant des inégalité homogène
  - Pour un sytème hétérogène, vous pouviez indiquer la position des inégalité différente comme suit:
    - `symbol->{position1 position2 ...}`

### Quelques examples
#### Cas ou le système est homogène
```
type: max
n: 2
p: 3
function: 7 8
constraints: |
  4 8 7
  5 8 9 
  8 5 6
inequality: <=
```