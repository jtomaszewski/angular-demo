import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public currentView: 'default' | 'on-push' | 'detached' = 'default';
  public currentViewOptions = ['default', 'on-push', 'detached'];

  public treeLevel = 4;
  public secondTreeLevel = 1;
  public payload = 0;
}
