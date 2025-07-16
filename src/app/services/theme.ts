import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable(); // Observable pour notifier les changements

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      this.isDarkModeSubject.next(isDark);
      this.updateTheme(isDark);
    }
  }

  toggleTheme() {
    const newTheme = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(newTheme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }

    this.updateTheme(newTheme);
  }

  private updateTheme(isDarkMode: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }
}
