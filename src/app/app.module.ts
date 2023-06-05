import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LayoutComponent } from './layout/layout.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { CardsLayoutComponent } from './layout/cards-layout/cards-layout.component';
import { MailContentComponent } from './layout/mail-content/mail-content.component';
import { HttpClientModule } from '@angular/common/http';
import { LazyloadDirective } from './directives/lazyload.directive';
import { SrcLibCardsUiModule } from 'src/lib/cards-ui/src/lib/src-lib-cards-ui.module';
//import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    LayoutComponent,
    SidemenuComponent,
    CardsLayoutComponent,
    MailContentComponent,
    LazyloadDirective,
  ],
  imports: [
    BrowserModule,
    SrcLibCardsUiModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
