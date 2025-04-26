import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  likes: number;
}

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  shareOnWhatsApp(link: string) {
    const encodedLink = encodeURIComponent(link);
    const whatsappUrl = `https://wa.me/?text=${encodedLink}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(link: string) {
    const encodedLink = encodeURIComponent(link);
    const telegramUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramUrl, '_blank');
  }

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}
