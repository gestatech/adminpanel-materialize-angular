import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  IconsComponent, NotificationsComponent,
  OverviewComponent, ProfileComponent,
  TableComponent, TypographyComponent
} from './components/index.components';

// import { AuthGuard } from './guards/index.guards';

const appRoutes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notification', component: NotificationsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent }

    // { path: 'admin/dashboard', canActivate: [AuthGuard], component: DashboardComponent },
    // { path: 'admin/people', canActivate: [AuthGuard], component: PersonListComponent },
    // { path: 'admin/addPerson', canActivate: [AuthGuard], component: PersonAddComponent },
    // { path: 'admin/editPerson/:id', canActivate: [AuthGuard], component: PersonEditComponent },
    // { path: 'admin/Navbar', component: NavbarComponent },
    // { path: '**', redirectTo: 'admin', pathMatch: 'full' }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

