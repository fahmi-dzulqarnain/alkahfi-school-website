import { Component } from "@angular/core";

@Component({
    selector:'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'
    slideIndex = 1

    // const indi = document.getElementsByClassName('indicator');

    // plusSlides(n: number) {
    //     this.showSlides(this.slideIndex += n);
    // }
    // currentSlide(n: number) {
    //     this.showSlides(this.slideIndex = n);
    // }

    // showSlides(n: number) {
    //     let i
    //     let slides = document.getElementsByClassName("mySlides");
    //     let dots = document.getElementsByClassName("dot");

    //     if (n > slides.length) {this.slideIndex = 1}
    //     if (n < 1) {this.slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[this.slideIndex-1].style.display = "block";
    //     dots[this.slideIndex-1].className += " active";
    // }
}
