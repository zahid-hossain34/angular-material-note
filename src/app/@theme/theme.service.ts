import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Option } from '../@application/interfaces/theme-option.interface';
import { HttpClient } from '@angular/common/http';
import { ThemeManagerService } from './theme-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {



constructor(
  private http: HttpClient,
  private themeStyleManager: ThemeManagerService
) { }
private menuExpandedSubject = new BehaviorSubject<boolean>(true);
menuExpanded$ = this.menuExpandedSubject.asObservable();

toggleMenu() {
  this.menuExpandedSubject.next(!this.menuExpandedSubject.value);
}
getThemeOptions(): Observable<Array<Option>> {
  return this.http.get<Array<Option>>("assets/options.json");
}
setTheme(themeToSet:string) {
  this.themeStyleManager.setStyle(
    "theme",
    `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
  );
}


}
