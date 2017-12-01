import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AppRepo {
  public locations = {
    loadCountriesCollection: function () {
      const data$ = new Subject();

      setTimeout(function () {
        data$.next([]);
        data$.complete();
      }, 50);

      return { data$: data$.asObservable() };
    }
  }
}
