import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Option } from '../@application/interfaces/theme-option.interface';
import { HttpClient } from '@angular/common/http';
import { ThemeManagerService } from './theme-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  selectedTheme = 'deeppurple-amber';
  private menuExpandedSubject = new BehaviorSubject<boolean>(true);
  menuExpanded$ = this.menuExpandedSubject.asObservable();
   updatedTheme = new BehaviorSubject<string>(this.selectedTheme);
  // updatedTheme$ = this.updatedTheme.asObservable();



constructor(
  private http: HttpClient,
  private themeStyleManager: ThemeManagerService
) { }


toggleMenu() {
  this.menuExpandedSubject.next(!this.menuExpandedSubject.value);
}
getThemeOptions(): Observable<Array<Option>> {
  return this.http.get<Array<Option>>("assets/options.json");
}
setTheme(themeToSet:string) {
  this.updatedTheme.next(themeToSet);
  this.updatedTheme.subscribe((res) => {
    this.selectedTheme = res;
  }
  );
  this.themeStyleManager.setStyle(
    "theme",
    `${this.selectedTheme}.css`
  );
}


}
