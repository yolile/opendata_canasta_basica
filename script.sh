#!/bin/bash

rm ttt.json
rm final.json
declare -a anhos=('2008' '2009' '2010' '2011' '2012' '2013' '2014')
declare -a productos=('Kokito' 'Pan Felipito' 'Naranja' 'Queso Paraguay' 'Tapa de Asado' 'Costilla'
			'Lomo' 'Harina' 'Galleta' 'Mandioca' 'Arroz' 'Fideo' 'Azucar' 'Banana carape' 'Yerba'
			'Vacio' 'Poroto' 'Puchero' 'Tapa Cuadril')
IFS=""
for p in ${productos[@]}; do
	for i in ${anhos[@]}; do
		cat productos.json | jq '[.[] | select(.RUBRO=="'$p'" and .ANHO=='$i') | .PRECIO]' > tt.json && echo $i : > temp.json && cat 		temp.json tt.json >> ttt.json
	done
	a="dataMap.dataProducto"
	b="= dataFormatter({"
	IFS="."
	c=$a$p$b
	echo $c > t.json && cat t.json ttt.json > casi.json && echo "});" > casit.json && cat casi.json casit.json >>final.json
	rm ttt.json
done


