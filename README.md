project_name: "Ecommerce React"
description: >
  Este es un proyecto desarrollado como parte del **Curso de React** de la **UTN**.  
  Consiste en un e-commerce tradicional que incluye:  
  - Listado de productos obtenidos desde Firebase.  
  - Registro de usuarios y autenticación mediante Firebase.  
  - Ingreso de usuarios registrados.  
  - Persistencia del carrito de compras y la sesión del usuario.

technologies:
  - React.js: Biblioteca para construir interfaces de usuario.
  - Firebase: Backend para autenticación, almacenamiento y base de datos.
  - Vite: Herramienta de desarrollo rápida y ligera.
  - Tailwind CSS: Framework para estilos.

installation_steps:
  - Clonar o descargar el repositorio:
      command: "git clone <URL-DEL-REPOSITORIO> && cd <CARPETA-DEL-REPOSITORIO>"
  - Instalar dependencias:
      command: "npm install"
  - Iniciar servidor de desarrollo:
      command: "npm run dev"

features:
  - Registro e inicio de sesión con Firebase.
  - Consulta y persistencia de productos desde Firebase.
  - Gestión de carrito de compras sincronizado con la cuenta del usuario.

preview_url: "https://pj-integral.vercel.app/"

project_structure: |
  src/
  ├── components/   # Componentes reutilizables.
  ├── contexts/     # Context API para la gestión de estado.
  ├── db/           # Configuración de Firebase.
  ├── pages/        # Vistas principales del proyecto.
  ├── styles/       # Archivos CSS.
  └── App.jsx       # Punto de entrada principal.
