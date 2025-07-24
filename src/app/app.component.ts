import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
        <div class="portfolio-grid">
          <div class="portfolio-item">Proyecto 1</div>
          <div class="portfolio-item">Proyecto 2</div>
          <div class="portfolio-item">Proyecto 3</div>
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