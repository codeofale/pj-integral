project_readme: |
  ---
  
  # 🛒 Ecommerce React  
  Este es un proyecto desarrollado como parte del **Curso de React** de la **UTN**.  
  Consiste en un e-commerce tradicional que incluye:  
  - **Listado de productos** obtenidos desde **Firebase**.  
  - **Registro de usuarios** y **autenticación** mediante Firebase.  
  - **Ingreso de usuarios registrados**.  
  - **Persistencia** del carrito de compras y la sesión del usuario.  
  
  ---
  
  ## 🚀 Tecnologías Utilizadas  
  - **React.js**: Biblioteca para construir interfaces de usuario.  
  - **Firebase**: Backend para autenticación, almacenamiento y base de datos.  
  - **Vite**: Herramienta de desarrollo rápida y ligera.  
  - **Tailwind CSS**: Framework para estilos.  
  
  ---
  
  ## 📦 Pasos de Instalación  
  
  1. **Descargar o clonar** el repositorio:  
     ```bash
     git clone <URL-DEL-REPOSITORIO>
     cd <CARPETA-DEL-REPOSITORIO>
     ```  
  
  2. Ejecutar:  
     ```bash
     npm install
     ```  
  
  3. Iniciar el servidor de desarrollo:  
     ```bash
     npm run dev
     ```  
  
  ---
  
  ## 🎯 Funciones Principales  
  ✅ Registro e inicio de sesión con Firebase.  
  ✅ Consulta y persistencia de productos desde Firebase.  
  ✅ Gestión de carrito de compras sincronizado con la cuenta del usuario.  
  
  ---
  
  ## 🌐 Vista Previa  
  https://pj-integral.vercel.app/  
  ---
  
  ## 📂 Estructura del Proyecto  
  ```plaintext
  src/
  ├── components/   # Componentes reutilizables.
  ├── contexts/     # Context API para la gestión de estado.
  ├── db/           # Configuración de Firebase.
  ├── pages/        # Vistas principales del proyecto.
  ├── styles/       # Archivos CSS.
  └── App.jsx       # Punto de entrada principal.
