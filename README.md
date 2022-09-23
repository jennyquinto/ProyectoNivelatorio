# ProyectoNivelatorio
Taller de Refuerzo
Registro e inicio de sesión de usuarios (CRUD de usuarios)
Objetivo: Crear un aplicativo que permita obtener, crear, editar y eliminar perfiles de usuarios.
El aplicativo debe cumplir con los siguientes requerimientos técnicos:
1. Implementar CSS para aplicar estilos y diseño responsive
2. Implementar JSON-Server que contengan toda la información de usuarios.
3. Cada objeto usuario debe contener mínimo la siguiente información:
a. id
b. Nombre
c. Apellidos
d. Email
e. Password
f. Tipo usuario (administrador o usuario regular)
g. url de la imagen de perfil
h. Frase que identifique al usuario
Nota: en la data contenida en el JSON Server debe tener al menos un usuario tipo administrador.
4. La primera página debe consistir en un Sign in con el siguiente diseño:
![image](https://user-images.githubusercontent.com/55018040/191891706-35912c00-6a3a-43ba-a750-03fe6c20e8a0.png)

5. El Sign in debe contener:
a. un form con dos inputs: el primero con el atributo type=”email” y el segundo con type= ”password”
b. Al dar click en el botón Sign in se debe validar los siguiente:
i. Si hay campos vacíos debe mostrar una ventana emergente o alert que indique cual es el dato faltante.
ii. Si el email es incorrecto mostrar una ventana emergente o alert que muestre el mensaje “el email ingresado no existe”.
iii. Si la contraseña es incorrecta mostrar una ventana emergente o alert que muestre el mensaje “la contraseña ingresada es incorrecta”.
iv. Si el email y contraseña ingresada son correctas debe:
1. Mostrar una ventana emergente o alert que muestre el mensaje “Bienvenido nombre del usuario”, y
2. redireccionar al usuario a la página home.
6. En la página home:
a. Se debe conservar el estilo de la página principal (sign in):
i. En el diseño desktop en la mitad izquierda de la página que se muestre la información personal del usuario y un botón que al dar click, permita editar nombre, password, url de la imagen de perfil y/o frase y adicional habilite un botón de guardar cambios que permita realizar la petición PUT o PATCH sobre el elemento correspondiente. En la mitad derecha de la página debe aparecer la imagen del usuario con su frase personal, nombre y apellido.
ii. En el diseño mobile, se debe mostrar en forma de columna primero la imagen de perfil del usuario justo con su frase personal, nombre y apellido, y luego la información de usuario con el botón de edición.
b. La edición de los datos del usuario se debe realizar mediante una petición PUT o PATCH en JSON Server.
c. Cuando el usuario confirme los cambios en la edición se deben ver reflejados inmediatamente en la página.
d. Para un usuario tipo administrador debe habilitarse en esta página un botón o link (etiqueta <a>) llamado Ver listado de usuarios que al dar click debe:
i. Redireccionarlo a una página donde se enlisten todos los usuarios contenidos en la data del JSON Server y un botón back que permita devolverlo a la página home. Esta nueva página también debe conservar los estilos de la página de sign in (como tipo de letra y paleta de colores: blanco, negro y gris).
ii. Contar con un input de búsqueda de usuario por nombre.
iii. Y por cada usuario debe tener disponible una columna de actions donde le permitirá al administrador editar y eliminar usuarios.
iv. Al dar click sobre el botón editar información del usuario, debe aparecer un formulario con los datos de usuario listos para ser modificados y al dar click sobre el botón Guardar, se realice una petición PUT o PATCH, se muestre una alerta que los datos fueron guardados de manera exitosa y se muestren los cambios reflejados de manera inmediata.
v. Al dar click sobre el botón eliminar primero debe preguntarle al usuario si está seguro de eliminar, a través de un confirm y si el usuario realiza click en aceptar se procede a realizar la petición DELETE.
7. En la página Sign in al dar click sobre el link “Sign up for free” debe permitir al usuario:
a. Redireccionarlo a la página Sign up (debe conservar el mismo estilo de la página sign in)
i. La página Sign up debe contener:
1. Título: Create an account.
2. Un form con mínimo 5 inputs, una etiqueta <textarea> como campo de entrada para ingresar la frase y un botón type=”submit” llamado Sign up.
3. Los inputs deben ser:
a. Dos inputs Type=”text” para el nombre y apellido
b. Un input type=”email”
c. Un input type=”password”
d. Un input type =”url” para ingresar la url de la imagen del usuario.
b. Al dar click en el botón Sign up debe crear el nuevo usuario mediante la petición POST y por último mostrar una ventana modal o alert que indique que el nuevo usuario fue creado exitosamente.
c. Los usuarios que sean creados en el sign up deben ser capaces de loguearse o iniciar sesión en el sign in y continuar el flujo especificado anteriormente.
8. En el aplicativo se debe evidenciar uso de:
a. Condicionales
b. Peticiones HTTPs
c. Eventos del DOM
d. Métodos de arrays
e. Flexbox
f. Media query
9. Cualquier funcionalidad adicional implementada, será tenida en cuenta como punto extra sobre la calificación del taller, después de haber completado los requerimientos mínimos.
10. Se tendrá en cuenta como puntuación extra la implementación de sweetalert https://sweetalert2.github.io/ para mostrar las alertas.
