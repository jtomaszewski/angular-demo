import {
  Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AppRepo } from '../app-repo.service';

const w: any = window;
w._globalRenderCount = w._globalRenderCount || 0;

const startTime = (new Date()).getTime();

@Component({
  selector: 'demo-sync',
  templateUrl: './demo-sync.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSyncComponent {
  @Input() public treeLevel: number;
  @Input() public secondTreeLevel: number;
  @Input() public payload: any;

  public internalPayload$: BehaviorSubject<number> = new BehaviorSubject(0);
  public set internalPayload(v: number) { this.internalPayload$.next(v); }
  public get internalPayload(): number { return this.internalPayload$.getValue(); }

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
