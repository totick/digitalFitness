import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {DateInfo} from '../interfaces/date_info';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'calendar',
    templateUrl: '../views/calendar.html', 
    directives: [NgClass]
})
export class CalendarComponent implements OnInit {

    allDays: DateInfo[][];
    startWeekDay: number;
    endMonthDay: number;

    getMonthInfo() {

        var d: Date = new Date("2016-04-01");
        var month: number = d.getMonth();
        this.startWeekDay = d.getDay();
        this.endMonthDay = new Date(d.getFullYear(), month, 0).getDate();

        d.setDate(d.getDate() - (this.startWeekDay - 1));

        this.allDays = [];

        for (var i = 0; i < 5; i++) {
            var oneWeek: DateInfo[] = [];
            for (var j = 0; j < 7; j++) {
                var withinMonth: boolean = (d.getMonth() == month) ? true : false;
                var dateInfo: DateInfo = { date: new Date(d.toString()), trained: false, withinMonth: withinMonth };
                oneWeek.push(dateInfo);
                d.setDate(d.getDate() + 1);
            }
            this.allDays.push(oneWeek);
        }

    }

    ngOnInit(): any {
        this.getMonthInfo();
    }
}