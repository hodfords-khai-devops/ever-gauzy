import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerDashboardComponent } from './server-dashboard.component';
import {
	NbLayoutModule,
	NbCardModule,
	NbIconModule,
	NbDialogModule,
	NbDialogService,
	NbButtonModule,
	NbSpinnerModule
} from '@nebular/theme';

@NgModule({
	declarations: [ServerDashboardComponent],
	imports: [
		CommonModule,
		NbLayoutModule,
		NbCardModule,
		NbIconModule,
		NbDialogModule,
		NbButtonModule,
		NbSpinnerModule
	],
	exports: [ServerDashboardComponent],
	providers: [NbDialogService]
})
export class ServerDashboardModule {}
