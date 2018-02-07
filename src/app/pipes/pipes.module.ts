import { NgModule } from "@angular/core";
import { PublisherPipe } from "./publisher.pipe";
import { BucketPipe } from './bucket.pipe';

@NgModule({
    declarations: [ PublisherPipe, BucketPipe ],
    exports: [ PublisherPipe, BucketPipe ]
})
export class PipesModule {}