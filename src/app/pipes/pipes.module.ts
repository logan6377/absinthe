import { NgModule } from "@angular/core"; 
import { BucketPipe } from './bucket.pipe';
import { StatusPipe } from "./status.pipe";
import { ComplexityPipe } from './complexity.pipe';

@NgModule({
    declarations: [ BucketPipe, StatusPipe, ComplexityPipe ],
    exports: [ BucketPipe, StatusPipe, ComplexityPipe ]
})
export class PipesModule {}