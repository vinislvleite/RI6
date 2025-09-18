export default class Bhaskara {
    public calcular(a: number, b: number, c: number): number[] {
        const delta = (b * b) - (4 * a * c);
        
        if (delta < 0) {
            return [];
        }
        
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        
        return delta === 0 ? [x1] : [x1, x2];
    }
}