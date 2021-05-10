import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [];

  separatorMenu: IMenuItem[] = [];

  plainMenu: IMenuItem[] = [
    {
      name: "Tournaments",
      type: "link",
      icon: "dashboard",
      state: "tournaments"
    },
    {
      name: "DIALOGS",
      type: "dropDown",
      tooltip: "Dialogs",
      icon: "filter_none",
      state: "dialogs",
      sub: [
        { name: "CONFIRM", state: "confirm" },
        { name: "LOADER", state: "loader" }
      ]
    },
    {
      name: "MATERIAL",
      type: "dropDown",
      icon: "favorite",
      state: "component",
      sub: [
        { name: "BUTTONS", state: "buttons" },
        { name: "Button Toggle", state: "button-toggle" },
        { name: "Buttons Loading", state: "loading-buttons" },
        { name: "CARDS", state: "cards" },
        { name: "GRIDS", state: "grids" },
        { name: "LISTS", state: "lists" },
        { name: "MENU", state: "menu" },
        { name: "TABS", state: "tabs" },
        { name: "SELECT", state: "select" },
        { name: "RADIO", state: "radio" },
        { name: "AUTOCOMPLETE", state: "autocomplete" },
        { name: "SLIDER", state: "slider" },
        { name: "PROGRESS", state: "progress" },
        { name: "SNACKBAR", state: "snackbar" }
      ]
    }
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Main Menu";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.plainMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case "separator-menu":
        this.menuItems.next(this.separatorMenu);
        break;
      case "icon-menu":
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.plainMenu);
    }
  }
}
