import { Component, OnInit, OnDestroy, ElementRef, ViewChild, ViewChildren, QueryList, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  content: {
    title: string[]
    subtitle?: string
    align: 'left' | 'center' | 'right'
    theme: 'brown' | 'white' | 'yellow'
    animation: 'fade-up' | 'fade-right' | 'zoom-in'
    SubtitleText: 'black' | 'white'
    SubtitleTheme: 'brown' | 'white' | 'yellow'
  };
}

interface CardsCarousel {
  title: string;
  subtitle: string;
  image: string;
  colorHex: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './homeComponent.html',
  styleUrls: ['./homeComponent.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  slides: Slide[] = [
    {
      image: 'assets/images/BodyImages/MainPage1.png',
      content: {
        title: ['Bueno', 'Por', 'Naturaleza'],
        subtitle: 'Descubrelos todos',
        align: 'right',
        theme: 'brown',
        animation: 'zoom-in',
        SubtitleText: 'white',
        SubtitleTheme: 'brown'
      }

    },
    {
      image: 'assets/images/BodyImages/MainPage2.png',
      content: {
        title: ['Energia', 'Y Sabor', 'Cada Mañana'],
        subtitle: 'Inspirate',
        align: 'right',
        theme: 'white',
        animation: 'zoom-in',
        SubtitleText: 'black',
        SubtitleTheme: 'white'
      }

    },
    {
      image: 'assets/images/BodyImages/MainPage3.png',
      content: {
        title: ['Sin', 'Gluten'],
        subtitle: 'Pruebalos todos',
        align: 'right',
        theme: 'yellow',
        animation: 'zoom-in',
        SubtitleText: 'white',
        SubtitleTheme: 'yellow'
      }

    },
  ];

  currentIndex = 0;
  intervalId!: number;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  @ViewChild('carousel', { static: true })
  carousel!: ElementRef<HTMLDivElement>;

  totalCards = 14;

  next() {
    if (this.currentIndex === this.totalCards - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.scrollToIndex();
  }

  prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.totalCards - 1;
    } else {
      this.currentIndex--;
    }

    this.scrollToIndex();
  }

  scrollToIndex() {
    const carouselEl = this.carousel.nativeElement;
    const cards = carouselEl.querySelectorAll('.carousel-cards-aling');

    if (cards[this.currentIndex]) {
      cards[this.currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }

  @ViewChildren('ZoomElement') zoomElements!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.zoomElements || this.zoomElements.length === 0) return;

    const viewportHeight = window.innerHeight;
    const centroPantalla = viewportHeight / 2;
    const radioEfecto = 600;

    this.zoomElements.forEach((elementRef: ElementRef) => {
      const el = elementRef.nativeElement;
      const rect = el.getBoundingClientRect();

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const centroImagen = rect.top + (rect.height / 2);
        const distanciaAbsoluta = Math.abs(centroImagen - centroPantalla);

        let progreso = distanciaAbsoluta / radioEfecto;
        progreso = Math.min(1, progreso);

        const escala = 1 + (progreso * 0.2);

        this.renderer.setStyle(
          el,
          'transform',
          `scale(${escala})`
        );
      }
    });
  }

  ListOfCards: CardsCarousel[] = [
    {
      title: 'Galletas',
      subtitle: 'Para un desayuno dulce y genuino',
      image: 'assets/images/BodyImages/Galletas.png',
      colorHex: '#EBCB64'
    },
    {
      title: 'Aperitivos',
      subtitle: 'El toque crujiente para tus momentos',
      image: 'assets/images/BodyImages/Aperitivos.png',
      colorHex: '#B9714A'
    },
    {
      title: 'Snacks dulces',
      subtitle: 'Empieza tu mañana con fuerza',
      image: 'assets/images/BodyImages/BarrasYsnacksDulces.png',
      colorHex: '#566D59'
    },
    {
      title: 'Cereales',
      subtitle: 'Para un desayuno dulce y genuino',
      image: 'assets/images/BodyImages/Cereal.png',
      colorHex: '#66869B'
    },
    {
      title: 'Tostadas',
      subtitle: 'Sencillez y tradición en cada bocado',
      image: 'assets/images/BodyImages/BizcochosTostados.png',
      colorHex: '#EBCB64'
    },
    {
      title: 'Aperitivos salados',
      subtitle: 'Ligereza y sabor que te acompaña',
      image: 'assets/images/BodyImages/SustitutosDelPanYaperitivosSalados.png',
      colorHex: '#809D03'
    },
    {
      title: 'Jugos de fruta',
      subtitle: 'Toda la frescura del huerto en tu vaso',
      image: 'assets/images/BodyImages/JugosDeFrutas.png',
      colorHex: '#BD6A5A'
    },
    {
      title: 'Para niños',
      subtitle: 'Nutrición para sus aventuras',
      image: 'assets/images/BodyImages/AlimentosParaBebesYninos.png',
      colorHex: '#66869B'
    },
    {
      title: 'Condimentos',
      subtitle: 'El secreto para transformar tus recetas',
      image: 'assets/images/BodyImages/Condimentos.png',
      colorHex: '#7E6E5D'
    },
    {
      title: 'Compotas',
      subtitle: 'Fruta dulce y pura hecha crema',
      image: 'assets/images/BodyImages/CompotasYuntables.png',
      colorHex: '#66869B'
    },
    {
      title: 'Preparaciones y harinas',
      subtitle: 'La base perfecta para tus creaciones',
      image: 'assets/images/BodyImages/PreparacionesYharinas.png',
      colorHex: '#B9714A'
    },
    {
      title: 'Pastas',
      subtitle: 'Auténtica, firme y deliciosa',
      image: 'assets/images/BodyImages/Pastas.png',
      colorHex: '#EBCB64'
    },
    {
      title: 'Sustitutos del cafe',
      subtitle: 'Bienestar en una taza reconfortante',
      image: 'assets/images/BodyImages/SustitutosDelCafe.png',
      colorHex: '#7E6E5D'
    },
    {
      title: 'Dulces',
      subtitle: 'Un viaje a través del azúcar',
      image: 'assets/images/BodyImages/DulcesTradicionales.png',
      colorHex: '#566D59'
    },
  ]

  products = [
    {
      name: 'Pastel de almendras y trigo',
      price: 3.6,
      image: 'assets/images/BodyImages/TartaDeTrigoSarraceno.png',
      imageHover: 'assets/images/BodyImages/TartaDeTrigoSarracenoHover.png',
      quantity: 1,
      badge: 'Sin gluten'
    },
    {
      name: 'Galletas de arroz y chocolate',
      price: 0.8,
      image: 'assets/images/BodyImages/GalletasDeArrozYchocolate.png',
      imageHover: 'assets/images/BodyImages/GalletasDeArrozYchocolateHover.png',
      quantity: 1,
      badge: 'Sin gluten'
    },
    {
      name: 'Pastel de cítricos sin gluten',
      price: 3.60,
      image: 'assets/images/BodyImages/PastelDeCítricosSinGluten.png',
      imageHover: 'assets/images/BodyImages/PastelDeCítricosSinGlutenHover.png',
      quantity: 1,
      badge: 'Sin gluten'
    },
    {
      name: 'Galletas de avena',
      price: 3.00,
      image: 'assets/images/BodyImages/GalletasDeAvena.png',
      imageHover: 'assets/images/BodyImages/GalletasDeAvenaHover.png',
      quantity: 1,
      badge: 'Sin levadura'
    },
    {
      name: 'Galletas chispas de chocolate',
      price: 3.09,
      image: 'assets/images/BodyImages/GalletasConChispasDeChocolate.png',
      imageHover: 'assets/images/BodyImages/GalletasConChispasDeChocolateHover.png',
      quantity: 1,
      badge: 'Sin levadura'
    },
    {
      name: 'Hojaldre de arandanos',
      price: 3.29,
      image: 'assets/images/BodyImages/HojaldreDeArándanos.png',
      imageHover: 'assets/images/BodyImages/HojaldreDeArándanosHover.png',
      quantity: 1,
      badge: 'Sin levadura'
    },
    {
      name: 'Compota de frutos del bosque',
      price: 3.50,
      image: 'assets/images/BodyImages/CompotaDeFrutosDelBosque.png',
      imageHover: 'assets/images/BodyImages/CompotaDeFrutosDelBosqueHover.png',
      quantity: 1,
      badge: 'Ingredientes 100% vegetales'
    },
    {
      name: 'Tarta de frutos rojos',
      price: 3.29,
      image: 'assets/images/BodyImages/TartaDeFrutosRojos.png',
      imageHover: 'assets/images/BodyImages/TartaDeFrutosRojosHover.png',
      quantity: 1,
      badge: 'Ingredientes 100% vegetales'
    },
    {
      name: 'Hojaldre de crema de cacao',
      price: 3.29,
      image: 'assets/images/BodyImages/HojaldreDeCremaDeCacao.png',
      imageHover: 'assets/images/BodyImages/HojaldreDeCremaDeCacaoHover.png',
      quantity: 1,
      badge: 'Ingredientes 100% vegetales'
    },
    {
      name: 'Bizcochos de trigo',
      price: 3.30,
      image: 'assets/images/BodyImages/BizcochosDeTrigo.png',
      imageHover: 'assets/images/BodyImages/BizcochosDeTrigoHover.png',
      quantity: 1,
      badge: 'Sin azucares añadidos'
    },
    {
      name: 'Pastel de zanahoria y almendras',
      price: 2.49,
      image: 'assets/images/BodyImages/PastelDeZanahoriaYalmendras.png',
      imageHover: 'assets/images/BodyImages/PastelDeZanahoriaYalmendrasHover.png',
      quantity: 1,
      badge: 'Sin azucares añadidos'
    },
    {
      name: 'Galletas de chocolate',
      price: 2.89,
      image: 'assets/images/BodyImages/GalletasDeChocolate.png',
      imageHover: 'assets/images/BodyImages/GalletasDeChocolateHover.png',
      quantity: 1,
      badge: 'Sin azucares añadidos'
    },
    {
      name: 'Snack de arándanos',
      price: 2.35,
      image: 'assets/images/BodyImages/SnacksDeArándanos.png',
      imageHover: 'assets/images/BodyImages/SnacksDeArándanosHover.png',
      quantity: 1,
      badge: 'Sin lactosa'
    },
    {
      name: 'Tarta de cacao',
      price: 3.09,
      image: 'assets/images/BodyImages/TartaDeCacao.png',
      imageHover: 'assets/images/BodyImages/TartaDeCacaoHover.png',
      quantity: 1,
      badge: 'Sin lactosa'
    },
    {
      name: 'Galletas de albaricoque',
      price: 3.60,
      image: 'assets/images/BodyImages/GalletasDeAlbaricoque.png',
      imageHover: 'assets/images/BodyImages/GalletasDeAlbaricoqueHover.png',
      quantity: 1,
      badge: 'Sin lactosa'
    },
    {
      name: 'Galletas de plátano',
      price: 2.29,
      image: 'assets/images/BodyImages/GalletasDePlátano.png',
      imageHover: 'assets/images/BodyImages/GalletasDePlátanoHover.png',
      quantity: 1,
      badge: 'Sin huevos'
    },
    {
      name: 'Tarta de albaricoque',
      price: 3.29,
      image: 'assets/images/BodyImages/TartaDeAlbaricoque.png',
      imageHover: 'assets/images/BodyImages/TartaDeAlbaricoqueHover.png',
      quantity: 1,
      badge: 'Sin huevos'
    },
    {
      name: 'Galletas integrales de avena',
      price: 2.99,
      image: 'assets/images/BodyImages/GalletasIntegralesDeAvena.png',
      imageHover: 'assets/images/BodyImages/GalletasIntegralesDeAvenaHover.png',
      quantity: 1,
      badge: 'Sin huevos'
    },

  ];

  selectedBadge: string = 'Sin gluten';

  selectBadge(nombre: string) {
    this.selectedBadge = nombre;
  }

  get filteredProducts() {

    return this.products.filter(product => product.badge === this.selectedBadge);

  }

  ListOfBadges = [
    {
      name: 'Sin gluten',
    },
    {
      name: 'Sin levadura',
    },
    {
      name: 'Ingredientes 100% vegetales',
    },
    {
      name: 'Sin azucares añadidos',
    },
    {
      name: 'Sin lactosa',
    },
    {
      name: 'Sin huevos',
    }
  ];

  Increase(product: any) {
    if (product.quantity >= 0) {
      product.quantity++;
    }
  }

  Decrease(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

}
