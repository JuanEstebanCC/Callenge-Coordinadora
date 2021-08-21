<h1 align="center">Challenge Coordinadora :package:</h1>


### Table of contents 
- [Endpoints](#endpoints)
- [Preguntas](#preguntas)
- [Instalación](#instalacion)
- [Video](#video)

### Preguntas 


#### ¿Qué es una inyección de dependencias y para qué sirve?
Es un patrón de diseño, donde la clase no tiene que crear un objeto por que es suministrado externamente, además de ser utilizado por una gran parte de frameworks, ayuda a dividir y delegar las responsabilidades haciendolás más claras de entender.

#### Diferencias entre asíncrono y sincrono
La programación sincrona realiza las instrucciones después de que la anterior haya terminado, es decir utiliza la anterior instrucción como condición para continuar, en la asincrona el paso se realizará incluso si la anterior secuencia no está terminada.

#### ¿Cuál es la importancia del uso de promesas en un proyecto? 
Es una forma más elegante y práctica para solucionar varios problemas del código asincrono de asíncronía, estás aspiran a solucionar las incertidumbres en el código, pueden cumplirse, no cumplirse o quedarse pendiente.

#### ¿Cuál es la importancia de usar ORM dentro de un proyecto?, ventajas y desventajas 
Los ORM ayudan simplificar y acelerar el desarrollo de nuestras aplicaciones, a partir de un modelo de programación que permite mapear o simular las estructuras de las bases de datos.

Ventajas:

- Reducción código necesario para el desarrollo de la aplicación
- Brinda seguridad 
- La gran variedad de ORM'S

Desventajas:
- Puede causar bajas importantes en el rendimiento
- Lleva tiempo aprenderlo, tomando en cuenta la variedad que existen 

#### ¿Que diferencia hay entre una base de datos SQL y NOSQL? 
- Las bases de datos NoSQL escalan más fácilmente
- El aspecto de seguridad está mejor implementado en las bases de datos SQL, sin mencionar la integridad de los datos
- El rendimiento de las bases de datos NoSQL es mucho mejor, en cuánto a rapidez de respuesta
- Las bases de datos NoSQL no son multiplataforma, como lo son en su mayoría las SQL
- Las herramientas de administración o uso de las bases de datos NoSQL son difíciles de usar por estar en un ambiente de consola o terminal, o ser poso usables.

#### ¿Si hablo de colección y documentos me refiero a? 
Es más que todo utilizado en bases de datos no relacionales como lo es MongoDB, con colección se refiere a un conjunto de documentos que son similares.
El documento se refiere a un representación de datos o información en formato BJSON parecido a el formato JSON (JavaScript Object Notation)


#### ¿Si una aplicación esta sacando error de CORS a que se refiere? 
Significa que las peticiones que estamos enviando o los recursos que estamos solicitando no se encuentran bajo el mismo dominio, en su defecto nos tocaría habilitarlo en el servidor en el cual ocurre el error para que soporte peticiones desde otros dominios.

### Endpoints 

>Los endpoints son anticipados por la ruta /challege, por ejemplo: http://localhost:8080/challenge/average

Todos los endopoints se pueden encontrar en el archivo swagger, en la ruta: http://localhost:8080/docs

### Instalacion

Esta API requiere <b>Node.js v10+</b>, y <b>ExpressJS v4+ </b> para funcionar.

Primero clonamos el repositorio en la rama main

```bash
git clone https://github.com/JuanEstebanCC/FIFA-21---API-REST.git
```


Abrimos la carpeta 

```
cd Challenge-Coordinadora
```

Instalamos las dependencias (se necesita tener NPM instalado)

```
npm install 
```

Corremos el servidor en el puerto (8080 por defecto)


-En modo desarrollo

```
npm run dev
```

-En modo de producción

```
npm start
```



### Video 
