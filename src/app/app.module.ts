import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        CatalogComponent,
        CategoryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
