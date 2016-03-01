System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var CalendarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CalendarComponent = (function () {
                function CalendarComponent() {
                }
                CalendarComponent.prototype.getMonthInfo = function () {
                    var d = new Date("2016-04-01");
                    var month = d.getMonth();
                    this.startWeekDay = d.getDay();
                    this.endMonthDay = new Date(d.getFullYear(), month, 0).getDate();
                    d.setDate(d.getDate() - (this.startWeekDay - 1));
                    this.allDays = [];
                    for (var i = 0; i < 5; i++) {
                        var oneWeek = [];
                        for (var j = 0; j < 7; j++) {
                            var withinMonth = (d.getMonth() == month) ? true : false;
                            var dateInfo = { date: new Date(d.toString()), trained: false, withinMonth: withinMonth };
                            oneWeek.push(dateInfo);
                            d.setDate(d.getDate() + 1);
                        }
                        this.allDays.push(oneWeek);
                    }
                };
                CalendarComponent.prototype.ngOnInit = function () {
                    this.getMonthInfo();
                };
                CalendarComponent = __decorate([
                    core_1.Component({
                        selector: 'calendar',
                        templateUrl: '../views/calendar.html',
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CalendarComponent);
                return CalendarComponent;
            })();
            exports_1("CalendarComponent", CalendarComponent);
        }
    }
});
//# sourceMappingURL=calendar.component.js.map