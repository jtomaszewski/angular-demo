import {
  Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() public value: string = '';
  @Output() public valueChange: EventEmitter<string> = new EventEmitter();
}
