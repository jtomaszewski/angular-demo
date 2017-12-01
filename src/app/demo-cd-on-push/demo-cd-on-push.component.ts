import {
  Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef
} from '@angular/core';

import { AppRepo } from '../app-repo.service';

const w: any = window;
w._globalRenderCount = w._globalRenderCount || 0;

const startTime = (new Date()).getTime();

@Component({
  selector: 'demo-cd-on-push',
  templateUrl: './demo-cd-on-push.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCdOnPushComponent {
  @Input() public treeLevel: number;
  @Input() public secondTreeLevel: number;
  @Input() public payload: any;

  public internalPayload: number = 0;
  public window: Window = window;

  private _thisRenderCount: number = 0;
  public get thisRenderCount() { return ++this._thisRenderCount; }

  private _globalRenderCounts: number[] = [];
  public get globalRenderCounts() { return this._globalRenderCounts = [...this._globalRenderCounts, ++w._globalRenderCount]; }

  public get time() { return (new Date()).getTime() - startTime; }

  constructor(
    private repo: AppRepo,
    private cdRef: ChangeDetectorRef,
  ) { }

  public doNothing() {
    console.log("doNothing");
  }

  public markForCheck() {
    this.cdRef.markForCheck();
  }

  public detectChanges() {
    this.cdRef.detectChanges();
  }

  public multipleDetectChanges() {
    this.cdRef.detectChanges();
    this.cdRef.detectChanges();
    this.cdRef.detectChanges();
  }

  public increaseInternalPayload() {
    this.internalPayload++;
  }

  public increaseInternalPayloadWithXHRWithoutDetectChanges() {
    this.repo.locations.loadCountriesCollection().data$
      .subscribe(data => {
        this.internalPayload++;
      });
  }

  public increaseInternalPayloadWithXHRWithDetectChanges() {
    this.repo.locations.loadCountriesCollection().data$
      .subscribe(data => {
        this.internalPayload++;
        this.cdRef.detectChanges();
      });
  }
}
