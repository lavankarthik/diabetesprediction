import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diabetes prediction';

  constructor(
    private serviceService: ServiceService
    ) { }

  Pregnancies:any =0 ;
  Glucose:any = 137;
  BloodPressure:any =40;
  SkinThickness:any =35;
  Insulin:any = 168;
  BMI:any = 43.1;
  DiabetesPedigreeFunction:any = 2.228;
  Age:any = 33;
  formValue:any;
  
  onSubmit(form:any){
    this.formValue=form.value;
    console.log(form.value);

    this.getOutcome(form.value);
  }

  data:any; 
  message:any;
  getOutcome(data: any) {
    return this.serviceService.predictOutcome(data).subscribe((response: {}) => {
      let data: any = response;
      this.data=data;
      
      console.log(response);
      if(this.data.message=="1")
      {
        this.message="Sorry to say that, you have diabetes"
        console.log(this.data.message)
      }
      else{
        this.message="Don't worry, you don't have diabetes"
        console.log(this.data.message)
      }
    });
  }

}
