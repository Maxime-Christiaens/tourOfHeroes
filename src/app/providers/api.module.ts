import { NgModule, ModuleWithProviders } from "@angular/core";
import { TodoProvider } from './provide.provider';
import { PostProvider} from './post.provider';

@NgModule({})
export class ApiModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [
                TodoProvider,
                PostProvider
            ]
        }
    }
}
