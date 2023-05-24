import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DesignComponent } from './pages/design/design.component';
import { BooksComponent } from './pages/books/books.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { PageMenuNavComponent } from './components/page-menu-nav/page-menu-nav.component';

import { NbThemeModule } from '@nebular/theme';
import { NbToggleModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DesignComponent,
    BooksComponent,
    ProductsComponent,
    CardContentComponent,
    PageMenuNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbToggleModule,
    NbEvaIconsModule,
    NbIconModule,
    //isso habilita o tema 'padrão', para mudar passe o atributo chave valor: '{name: 'dark'}', mudando para o dark theme
    NbThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
