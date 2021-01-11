import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Overlay, OverlayContainer, ToastrModule, ToastrService} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {ClipboardModule, ClipboardService} from 'ngx-clipboard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ClipboardModule,
    ],
    providers: [ClipboardService, ToastrService, Overlay, OverlayContainer],
    bootstrap: [AppComponent],
})
export class AppModule {
}
