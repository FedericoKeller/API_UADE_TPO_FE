# 🗄️ Estructura del Proyecto

La mayor parte del código se encuentra en la carpeta src y se ve así:

```sh
src
|
+-- assets            # La carpeta assets puede contener todos los archivos estáticos como imágenes, fuentes, etc.
|
+-- components        # Componentes compartidos utilizados en toda la aplicación
|
+-- config            # Toda la configuración global, variables de entorno, etc., se exportan desde aquí y se usan en la aplicación
|
+-- features          # Módulos basados en funcionalidads
|
+-- hooks             # Hooks compartidos utilizados en toda la aplicación
|
+-- lib               # Reexportación de diferentes bibliotecas preconfiguradas para la aplicación
|
+-- providers         # Todos los proveedores de la aplicación
|
+-- routes            # Configuración de rutas
|
+-- stores            # Almacenes de estado global
|
+-- test              # Utilidades de prueba y servidor mock
|
+-- types             # Tipos base utilizados en toda la aplicación
|
+-- utils             # Funciones utilitarias compartidas
```

Para escalar la aplicación de la manera más fácil y mantenible, se mantiene la mayor parte del código dentro de la carpeta features, que contiene diferentes cosas de acuerdo al criterio de funcionalidad. Cada carpeta de feature debe contener código específico del dominio para una funcionalidad dada. Esto permite mantener las funcionalidades delimitadas a una funcionalidad y no mezclar sus declaraciones con cosas compartidas. Esto es mucho más fácil de mantener que una estructura de carpetas plana con muchos archivos.

Una funcionalidad puede tener la siguiente estructura:

```sh
src/features/awesome-feature
|
+-- api         # Declaraciones de solicitudes de API y hooks de API relacionados con una funcionalidad específica
|
+-- assets      # La carpeta de assets puede contener todos los archivos estáticos para una funcionalidad específica
|
+-- components  # Componentes limitados a una funcionalidad específica
|
+-- hooks       # Hooks limitados a una funcionalidad específica
|
+-- routes      # Componentes de ruta para páginas de una funcionalidad específica
|
+-- types       # Tipos de TypeScript para el dominio de la funcionalidad específica
|
+-- utils       # Funciones utilitarias para una funcionalidad específica
|
+-- index.ts    # Punto de entrada para la funcionalidad; debe servir como la API pública de la funcionalidad dada y exportar todo lo que deba ser utilizado fuera de la funcionalidad
```

Todo de una funcionalidad debe exportarse desde el archivo index.ts, que funciona como la API pública de la funcionalidad.

Se importan las cosas de otras funcionalidades solo usando:

`import {AwesomeComponent} from "@/features/awesome-feature"`

y no

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`
