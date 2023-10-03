export class Utils {
    public static generateUniqId(){
        const id  = Math.random().toString(16).slice(2);
        return id;
    }
}