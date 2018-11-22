import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private appColor = '#C3002F';
  private appImage = '/assets/logo.svg';
  private appTitle = 'Angular Social';
  private appDescription = 'Angular Social is a Social Networking App built in Angular';

  constructor(private meta: Meta, private title: Title) { }

  public setMetaData(config) {
    // Get the description from the config, or use the default App Description
    const description = config.description || this.appDescription;

    // Get the image from  the config or use the App Image;
    const image = config.image || this.appImage;

    // Get the title from  the config and append the App Title, or just use the App Title
    const title = config.title
      ? `${config.title} - ${this.appTitle}`
      : this.appTitle;

    // Set the Application Title
    this.title.setTitle(title);

    // Add the Application Meta tags
    const tags = [
      { name: 'description', content: description },
      { name: 'theme-color', content: this.appColor },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: title },
      { name: 'apple-touch-startup-image', content: image },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
    ];

    tags.forEach(tag => this.meta.updateTag(tag));
  }

}
