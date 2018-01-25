import {
  Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef, SimpleChanges, ElementRef, ViewChild
} from '@angular/core';

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() public value: string = "";
  @Output() public valueChange: EventEmitter<string> = new EventEmitter();

  @ViewChild("input") private input: ElementRef;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      if (this.input.nativeElement.value != this.value) {
        this.input.nativeElement.value = this.value || "";
      }
    }
  }
}
