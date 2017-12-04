import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  public currentView: 'sync' | 'async' = 'sync';
  public currentViewOptions = ['sync', 'async'];

  public treeLevel = 4;
  public secondTreeLevel = 1;
  public payload = 0;

  constructor(
    private cdRef: ChangeDetectorRef,
  ) {
    // this.cdRef.detach();
  }

  ngOnInit() {
    // this.cdRef.detectChanges();
  }

  setCurrentView(currentView) {
    this.currentView = currentView;
    // this.cdRef.detectChanges();
  }
}
