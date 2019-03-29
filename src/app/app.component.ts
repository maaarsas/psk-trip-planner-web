import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './_services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trip-planner-web';

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    translate.addLangs(['lt', 'en']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.languageService.defaultLanguage);
    translate.use(this.languageService.getLanguage());
  }
}
