import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit{
  title = 'famazon-store';

  ngAfterViewInit() {
    // Отримуємо елементи меню та основного контенту
    const navbarMenu = document.getElementById('navbarSupportedContent');
    const mainContent = document.querySelector('.main-content') as HTMLElement;

    // Слухаємо подію відкриття меню
    navbarMenu?.addEventListener('shown.bs.collapse', () => {
      mainContent.style.paddingTop = '220px';  // Змінюємо відступ зверху
    });

    // Слухаємо подію закриття меню
    navbarMenu?.addEventListener('hidden.bs.collapse', () => {
      mainContent.style.paddingTop = '100px';  // Повертаємо стандартний відступ
    });

    
  }
}




// import { Component, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements AfterViewInit {

//   ngAfterViewInit() {
//     // Get the navigation menu element by its ID
//     const navbarMenu = document.getElementById('navbarSupportedContent');
    
//     // Get the main content element where we want to adjust padding
//     const mainContent = document.querySelector('.main-content') as HTMLElement;

//     // Function to check if the menu is open by checking the 'show' class
//     const checkMenuState = () => {
//       if (navbarMenu?.classList.contains('show')) {
//         // If the 'show' class is present (menu is open), increase padding
//         mainContent.style.paddingTop = '200px';
//       } else {
//         // If the 'show' class is absent (menu is closed), set default padding
//         mainContent.style.paddingTop = '100px';
//       }
//     };

//     // Run the checkMenuState function on page load to apply initial padding
//     checkMenuState();

//     // Get the toggle button for the navigation menu
//     const menuToggle = document.querySelector('.navbar-toggler');

//     // Add a click event listener to the toggle button
//     menuToggle?.addEventListener('click', () => {
//       // Use setTimeout to delay the check, because Bootstrap applies classes with a small delay
//       setTimeout(checkMenuState, 300); // Adjust 300ms if needed, matches Bootstrap transition time
//     });
//   }
// }



