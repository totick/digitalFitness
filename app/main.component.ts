import {Component} from 'angular2/core';
import {CalendarComponent} from './view_components/calendar.component';

@Component({
    selector: 'main-app',
    template: `
        <!-- The container class is the wrapper for all the rows -->
        <div class="container">
            <calendar></calendar>
        </div>
    `,
    directives: [CalendarComponent]
})
export class MainComponent{
    
}