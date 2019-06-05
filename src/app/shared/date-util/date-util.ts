export class DateUtil {

    dateToTimeStamp(date: string): number {
        return new Date(date).getTime();
    }

}