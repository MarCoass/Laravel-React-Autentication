# Autenticacion Laravel - React

Este proyecto utiliza Laravel en el backend y React en el frontend, con autenticación de usuario mediante Breeze. Incluye inicio de sesión, registro y reseteo de contraseña. La base de datos utilizada es PostgreSQL y se utiliza Tailwind CSS para el diseño.

## Configuración

### Backend (Laravel)

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   cd tu-proyecto
2. **Instala las dependencias de Composer:**
    ```bash
    composer install
3. **Copia el archivo de configuración y configura tu base de datos en .env:**
    ```bash
    cp .env.example .env
4. **Genera la clave de la aplicación:**

    ```bash
    php artisan key:generate
5. **Configura la conexión a la base de datos en el archivo .env.**

6. **Ejecuta las migraciones y los seeders para crear las tablas y usuarios de prueba:**
    ```bash
    php artisan migrate --seed
7. **Inicia el servidor de Laravel:**

    ```bash
    php artisan serve
### Frontend (React)
8. **Navega a la carpeta del frontend:**

    ```bash
    cd react-breeze-api
9. **Instala las dependencias de npm:**

    ```bash
    npm install
10. **Inicia la aplicación de React:**

    ```bash
    npm start
### Configuración de Mailtrap
11.  **Crea una cuenta en Mailtrap y obtén tus credenciales SMTP.**

12. **Configura las credenciales en el archivo .env del backend (Laravel):**

    ```bash
    MAIL_MAILER=smtp
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=2525
    MAIL_USERNAME=your-mailtrap-username
    MAIL_PASSWORD=your-mailtrap-password
    MAIL_ENCRYPTION=tls
    
## Uso
Accede a la aplicación en tu navegador: http://localhost:3000

Utiliza las rutas de autenticación proporcionadas por Laravel para iniciar sesión, registrarse y restablecer la contraseña.
- Mail: text@example.com
- Contraseña: password
