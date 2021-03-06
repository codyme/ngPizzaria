import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { OrderComponent } from './components/order/order.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);