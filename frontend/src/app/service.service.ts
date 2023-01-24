import { Injectable } from '@angular/core';


import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  url:any = "http://52.73.190.185/predictOutcome";

  predictOutcome(data:any): Observable<any> {
    //console.log(data);

    //console.log(this.url+ "?Pregnancies=" + data.Area + "&Glucose=" + data.Glucose + "&BloodPressure=" + data.BloodPressure + "&SkinThickness=" + data.SkinThickness + "&Insulin=" + data.Insulin + "&BMI=" + data.BMI   + "&DiabetesPedigreeFunction=" + data.DiabetesPedigreeFunction + "&Age=" + data.Age);

    return this.http
      .get<any>(this.url+ "?Pregnancies=" + data.Pregnancies+ "&Glucose=" + data.Glucose + "&BloodPressure=" + data.BloodPressure + "&SkinThickness=" + data.SkinThickness + "&Insulin=" + data.Insulin + "&BMI=" + data.BMI + "&DiabetesPedigreeFunction=" + data.DiabetesPedigreeFunction + "&Age=" + data.Age)
  }

}

