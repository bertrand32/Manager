import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Mode } from "./mode/mode";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Mode],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   menus = ['Add', 'Active', 'Inactive',];
   ActiveMenu = 'Add';

    setActive(menu: string) {
    this.ActiveMenu = menu;
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
