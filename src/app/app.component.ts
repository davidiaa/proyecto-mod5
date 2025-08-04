import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <nav class="navbar">
        <a href="#" class="logo">Mi Nombre</a>
        <ul>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="hero" class="hero-section">
        <div class="hero-content">
          <h1>¡Hola, soy David Acarapi!</h1>
          <p>Desarrollador Web | Diseñador Creativo | Apasionado por la Tecnología</p>
          <button class="call-to-action">Conoce Más</button>
        </div>
      </section>

      <section id="about" class="about-section">
        <h2>Sobre Mí</h2>
        <p>Aquí puedes escribir una breve biografía sobre ti, tus habilidades, tus pasiones, etc.</p>
        <p>Por ejemplo: "Soy un desarrollador apasionado por crear experiencias web intuitivas y visualmente atractivas. Con experiencia en Angular, TypeScript y SCSS, me encanta transformar ideas en soluciones funcionales."</p>
        
      </section>

      <section id="portfolio" class="portfolio-section">
        <h2>Portafolio</h2>
        <p>Estos son algunos de los proyectos en los que he trabajado.</p>
        <div class="waterfall-gallery">
          <!-- Asegúrate de que estas imágenes estén en tu carpeta src/assets -->
          <img src="imagen-1.jpeg" alt="Descripción del Proyecto 1">       
          <img src="imagen-2.jpeg" alt="Descripción del Proyecto 2">
          <img src="imagen-3.jpeg" alt="Descripción del Proyecto 3">
          <img src="imagen-4.jpeg" alt="Descripción del Proyecto 4">
          <img src="imagen-5.jpeg" alt="Descripción del Proyecto 5">
          <img src="imagen-6.jpeg" alt="Descripción del Proyecto 6">
          <img src="imagen-7.jpeg" alt="Descripción del Proyecto 7">
          <img src="imagen-8.jpeg" alt="Descripción del Proyecto 8">
          <img src="imagen-9.jpeg" alt="Descripción del Proyecto 9">
          
          <!-- Agrega más imágenes según sea necesario -->
        </div>
      </section>

      <section id="contact" class="contact-section">
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de:</p>
        <ul>
          <li>Email: </li>
          <li>LinkedIn: tu-perfil-linkedin</li>
          <li>GitHub: tu-perfil-github</li>
        </ul>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; {{ currentYear }} David. Todos los derechos reservados.</p>
    </footer>
  `,
  styleUrl: './app.component.scss' // Asegúrate de que esto coincida con el nombre de tu archivo de estilos
})
export class AppComponent {
  title = 'tu-nombre-landing-page';
  currentYear: number = new Date().getFullYear();
}