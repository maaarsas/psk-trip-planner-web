import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trip-planner-web';

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'lt']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('lt');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|lt/) ? browserLang : 'lt');
  }
}
