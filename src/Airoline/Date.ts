export class Date{
                    constructor (public time:string,public day:string,public month:string,public year:string){
                                        this.time = time;
                                        this.day = day;
                                        this.month = month;
                                        this.year = year;
                    }
                    isEqual(other:string):boolean{
                                        if(this.time == other && this.day == other && this.month == other && this.year){
                                                            return true;
                                        }

                    }
}