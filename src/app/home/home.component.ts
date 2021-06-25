import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  name: string = '';

  constructor(private authService: AuthService) {
    // console.log(this.authService.getLogin());
    this.isLoggedIn = this.authService.getLogin();
    if (this.isLoggedIn) {
      this.name = (JSON.parse(localStorage.getItem('userData') || '{}')).name
    }

  }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}

