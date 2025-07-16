import { Component } from '@angular/core';
import { ThemeService } from '../services/theme';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mode',
  imports: [CommonModule],
  templateUrl: './mode.html',
  styleUrl: './mode.scss'
})
export class Mode {
  isDarkMode = false;
  constructor(private themeService: ThemeService,private router: Router) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
