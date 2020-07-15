
import {AbstractControl, ValidationErrors} from '@angular/forms'


export class UserNameValidator{
    
    static HamzaFct(control: AbstractControl): ValidationErrors | null{
            
        if((control.value as string).indexOf(' ')>=0)

            return {HamzaFct:true}
            return null
        

         
    }




}