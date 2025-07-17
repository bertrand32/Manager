import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Mode } from "./mode/mode";
import { Holiday } from './models/holiday';
import { HolidayService } from './services/holiday';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, Mode],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  menus = ['Add', 'Active', 'Inactive',];
  ActiveMenu = 'Add';
  isloading = true
  holidays: Holiday[] = [];
   setActive(menu: string) {
    this.ActiveMenu = menu;

    if(menu === 'Active'){
      this.loadHolidays()
    }
  }
  constructor(private holidayService: HolidayService) {}

  ngOnInit(): void {
    this.loadHolidays();
  }

  loadHolidays(): void {
    this.holidayService.getHolidays().subscribe({
      next: (data) => {
        this.holidays = data;
        this.isloading = false
        console.log('Holidays:', data);
      },
      error: (error) => {
        this.isloading = false
        console.error('Erreur API :', error);
      }
    });
  }
    users=[
    { name: 'DevLens', description: 'Quickly inspect page layouts and visualize element boundaries.', active: true },
    { name: 'StyleSpy', description: 'Instantly analyze and copy CSS from any webpage element.', active: true },
    { name: 'SpeedBoost', description: 'Optimizes browser resource usage to accelerate page loading.', active: false },
    { name: 'JSONWizard', description: 'Formats, validates, and prettifies JSON responses in-browser.', active: true },
    { name: 'TabMaster Pro', description: 'Organizes browser tabs into groups and sessions.', active: true },
    { name: 'ViewportBuddy', description: 'Simulates various screen resolutions directly within the browser.', active: false },
    { name: 'Markup Notes', description: 'Enables annotation and notes directly onto webpages.', active: true },
    { name: 'GridGuides', description: 'Overlay customizable grids and alignment guides.', active: false },
    { name: 'Palette Picker', description: 'Extracts color palettes from any webpage.', active: true },
    { name: 'LinkChecker', description: 'Scans and highlights broken links.', active: false },
    { name: 'DOM Snapshot', description: 'Capture and export DOM structures quickly.', active: false },
    { name: 'ConsolePlus', description: 'Enhanced developer console with advanced filtering.', active: true }
  ]
}