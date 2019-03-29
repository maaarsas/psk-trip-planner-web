import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private localStorageItemName = 'language';
  public readonly defaultLanguage = 'lt';

  constructor(private translate: TranslateService) { }

  getLanguage(): string {
    const lang = localStorage.getItem(this.localStorageItemName);
    if (lang || this.translate.getLangs().includes(lang)) {
      return lang;
    }
    return this.defaultLanguage;
  }

  setLanguage(lang: string) {
    if (!this.translate.getLangs().includes(lang)) {
      lang = this.defaultLanguage;
    }
    this.translate.use(lang);
    localStorage.setItem(this.localStorageItemName, lang);
  }
}
