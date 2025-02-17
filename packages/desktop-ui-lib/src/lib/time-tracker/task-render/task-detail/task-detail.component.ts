import { Component, Input } from '@angular/core';
import { ITaskRender } from '../task-render.component';
import { ITag, ITaskPriority, ITaskSize, ITaskStatus } from '@gauzy/contracts';

@Component({
	selector: 'gauzy-task-detail',
	templateUrl: './task-detail.component.html',
	styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent {
	@Input()
	private task: ITaskRender;

	constructor() {}

	public get title(): string {
		return this.task?.title;
	}

	public get number(): string {
		return this.task?.taskNumber;
	}

	public get tags(): ITag[] {
		return this.task?.tags;
	}

	public get description(): string {
		return this.task?.description;
	}

	public get size(): ITaskSize {
		return this.task?.taskSize;
	}

	public get priority(): ITaskPriority {
		return this.task?.taskPriority;
	}

	public get status(): ITaskStatus {
		return this.task?.taskStatus;
	}
}
