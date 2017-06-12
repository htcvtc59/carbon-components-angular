import { Component, Injector } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "drill-modal",
	template: `
		<cdl-modal size="xl" (overlaySelected)="closeModal()">
			<cdl-modal-header (closeSelect)="closeModal()">
				<a
					(click)="drill($event, false)"
					class="breadcrumb"
					href="#">
					Header text
				</a>
				<span *ngIf="drilledin">
					<cdl-icon icon="chevron_right" size="sm" style="fill: white;"></cdl-icon>
					Drilled down
				</span>
			</cdl-modal-header>
			<section class="modal-body">
				<div *ngIf="!drilledin">
					<h1>Drill modal works.</h1>
					<button class="btn" (click)="drill($event)">Drill down</button>
				</div>
				<div *ngIf="drilledin">
					<h1>Hello, from drilled down content.</h1>
				</div>
			</section>
			<cdl-modal-footer><button class="btn cancel-button" (click)="closeModal()">Close</button></cdl-modal-footer>
		</cdl-modal>
	`,
	styleUrls: ["./sample-modal.component.scss"]
})
export class DrilldownModalComponent {
	public drilledin = false;

	constructor(private injector: Injector) {}

	public drill(ev, drilled = true) {
		ev.preventDefault();
		this.drilledin = drilled;
	}
}
